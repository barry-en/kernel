"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const madge = require("madge");
const eth_connect_1 = require("eth-connect");
const fs_1 = require("fs");
const path_1 = require("path");
const baseDir = process.cwd();
async function main() {
    await processEntryPoint('packages/gif-processor/worker.ts');
    await processEntryPoint('packages/decentraland-loader/lifecycle/worker.ts');
    await processEntryPoint('packages/scene-system/scene.system.ts');
    await processEntryPoint('packages/entryPoints/index.ts');
    await processEntryPoint('packages/ui/decentraland-ui.scene.ts');
    await processEntryPoint('packages/voice-chat-codec/audioWorkletProcessors.ts');
    await processEntryPoint('packages/voice-chat-codec/worker.ts');
}
async function processEntryPoint(entryPoint) {
    const tsConfig = (0, path_1.resolve)((0, path_1.dirname)(entryPoint), './tsconfig.json');
    console.log({ entryPoint, tsConfig });
    const result = await madge(entryPoint, { baseDir, tsConfig });
    function nodeKey(path) {
        return 'N' + (0, eth_connect_1.sha3)(path).substring(0, 6);
    }
    const nodes = new Set();
    function* drawNodes() {
        for (const path in result.tree) {
            yield `${nodeKey(path)};`;
            nodes.add(path);
            for (let leaf of result.tree[path]) {
                nodes.add(leaf);
                yield `${nodeKey(leaf)};`;
            }
        }
    }
    function* drawEdges() {
        for (const from in result.tree) {
            for (const to of result.tree[from]) {
                yield `${nodeKey(from)}->${nodeKey(to)};`;
            }
        }
    }
    function* drawClusters() {
        const clusters = new Map();
        function selectClusterName(path) {
            if (path.match(/packages\/shared\/([^/]+)\//))
                return 'packages/shared/' + path.match(/packages\/shared\/([^/]+)\//)[1];
            if (path.match(/packages\/([^/]+)\//))
                return 'packages/' + path.match(/packages\/([^/]+)\//)[1];
            return 'unknown';
        }
        function addNode(path) {
            const clusterName = selectClusterName(path);
            const cluster = clusters.get(clusterName) || new Set();
            clusters.set(clusterName, cluster);
            cluster.add(path);
        }
        nodes.forEach(addNode);
        let i = 0;
        for (const [cluster, nodes] of clusters) {
            yield `subgraph cluster_${i++} {
        style=filled;
        color=lightgrey;
        node [style=filled,color=white, shape=plaintext];
        label = "${cluster}";\n`;
            for (const node of nodes) {
                yield `\t${nodeKey(node)} [label=${JSON.stringify(node.replace(cluster + '/', ''))}];`;
            }
            yield `}`;
        }
    }
    const dot = [
        `digraph G {`,
        `rankdir="LR";`,
        `concentrate=true;`,
        `graph[fontname="Arial",ratio=fill];`,
        `edge[fontname="Arial"];`,
        `node[fontname="Arial",shape=rectangle];`,
        // `splines=polyline;`,
        // `labeljust="l";`,
        '/* Files */',
        ...drawNodes(),
        '\n/* Edges */',
        ...drawEdges(),
        '\n/* Clusters */',
        ...drawClusters(),
        `}`
    ].join('\n');
    (0, fs_1.writeFileSync)(entryPoint + '.dot', dot);
}
main().catch((err) => {
    process.exitCode = 1;
    console.error(err);
});
