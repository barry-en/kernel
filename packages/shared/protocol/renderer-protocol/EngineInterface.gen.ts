/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../google/protobuf/empty.gen";

export const protobufPackage = "engineinterface";

export enum PBUIStackOrientation {
  VERTICAL = 0,
  HORIZONTAL = 1,
  UNRECOGNIZED = -1,
}

export function pBUIStackOrientationFromJSON(object: any): PBUIStackOrientation {
  switch (object) {
    case 0:
    case "VERTICAL":
      return PBUIStackOrientation.VERTICAL;
    case 1:
    case "HORIZONTAL":
      return PBUIStackOrientation.HORIZONTAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PBUIStackOrientation.UNRECOGNIZED;
  }
}

export function pBUIStackOrientationToJSON(object: PBUIStackOrientation): string {
  switch (object) {
    case PBUIStackOrientation.VERTICAL:
      return "VERTICAL";
    case PBUIStackOrientation.HORIZONTAL:
      return "HORIZONTAL";
    case PBUIStackOrientation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface PBCreateEntity {
  id: string;
}

export interface PBRemoveEntity {
  id: string;
}

export interface PBSetEntityParent {
  entityId: string;
  parentId: string;
}

export interface PBComponentRemoved {
  entityId: string;
  name: string;
}

export interface PBComponent {
  transform: PBTransform | undefined;
  uuidCallback: PBUUIDCallback | undefined;
  box: PBBoxShape | undefined;
  sphere: PBSphereShape | undefined;
  plane: PBPlaneShape | undefined;
  cone: PBConeShape | undefined;
  cylinder: PBCylinderShape | undefined;
  text: PBTextShape | undefined;
  nft: PBNFTShape | undefined;
  containerRect: PBUIContainerRect | undefined;
  containerStack: PBUIContainerStack | undefined;
  uiTextShape: PBUITextShape | undefined;
  uiInputTextShape: PBUIInputText | undefined;
  uiImageShape: PBUIImage | undefined;
  circle: PBCircleShape | undefined;
  billboard: PBBillboard | undefined;
  gltf: PBGLTFShape | undefined;
  obj: PBOBJShape | undefined;
  avatar: PBAvatarShape | undefined;
  basicMaterial: PBBasicMaterial | undefined;
  texture: PBTexture | undefined;
  audioClip: PBAudioClip | undefined;
  audioSource: PBAudioSource | undefined;
}

export interface PBColor4 {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface PBColor3 {
  r: number;
  g: number;
  b: number;
}

export interface PBTextShapeModel {
  billboard: boolean;
  value: string;
  color: PBColor3 | undefined;
  opacity: number;
  fontSize: number;
  fontAutoSize: boolean;
  fontWeight: string;
  hTextAlign: string;
  vTextAlign: string;
  width: number;
  height: number;
  adaptWidth: boolean;
  adaptHeight: boolean;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  lineSpacing: number;
  lineCount: number;
  textWrapping: boolean;
  shadowBlur: number;
  shadowOffsetX: number;
  shadowOffsetY: number;
  shadowColor: PBColor3 | undefined;
  outlineWidth: number;
  outlineColor: PBColor3 | undefined;
}

export interface PBVector3 {
  x: number;
  y: number;
  z: number;
}

export interface PBQuaternion {
  x: number;
  y: number;
  z: number;
  w: number;
}

export interface PBTransform {
  position: PBVector3 | undefined;
  rotation: PBQuaternion | undefined;
  scale: PBVector3 | undefined;
}

export interface PBUpdateEntityComponent {
  entityId: string;
  classId: number;
  name: string;
  data: string;
}

export interface PBComponentCreated {
  id: string;
  classid: number;
  name: string;
}

export interface PBAttachEntityComponent {
  entityId: string;
  name: string;
  id: string;
}

export interface PBComponentDisposed {
  id: string;
}

export interface PBComponentUpdated {
  id: string;
  json: string;
}

export interface PBRay {
  origin: PBVector3 | undefined;
  direction: PBVector3 | undefined;
  distance: number;
}

export interface PBRayQuery {
  queryId: string;
  queryType: string;
  ray: PBRay | undefined;
}

export interface PBQuery {
  queryId: string;
  payload: string;
}

export interface PBSendSceneMessage {
  sceneId: string;
  tag: string;
  createEntity: PBCreateEntity | undefined;
  removeEntity: PBRemoveEntity | undefined;
  setEntityParent: PBSetEntityParent | undefined;
  updateEntityComponent: PBUpdateEntityComponent | undefined;
  attachEntityComponent: PBAttachEntityComponent | undefined;
  componentCreated: PBComponentCreated | undefined;
  componentDisposed: PBComponentDisposed | undefined;
  componentRemoved: PBComponentRemoved | undefined;
  componentUpdated: PBComponentUpdated | undefined;
  query: PBQuery | undefined;
  sceneStarted: Empty | undefined;
  openExternalUrl: PBOpenExternalUrl | undefined;
  openNFTDialog: PBOpenNFTDialog | undefined;
  sceneNumber: number;
}

export interface PBSetPosition {
  x: number;
  y: number;
  z: number;
}

export interface PBContentMapping {
  file: string;
  hash: string;
}

export interface PBPosition {
  x: number;
  y: number;
}

export interface PBLoadParcelScenes {
  id: string;
  basePosition: PBPosition | undefined;
  parcels: PBPosition[];
  contents: PBContentMapping[];
  baseUrl: string;
  /** ILand land = 6; */
  sceneNumber: number;
}

export interface PBCreateUIScene {
  id: string;
  baseUrl: string;
  sceneNumber: number;
}

export interface PBUnloadScene {
  sceneId: string;
  sceneNumber: number;
}

export interface PBDclMessage {
  setDebug: Empty | undefined;
  setSceneDebugPanel: Empty | undefined;
  setEngineDebugPanel: Empty | undefined;
  sendSceneMessage: PBSendSceneMessage | undefined;
  loadParcelScenes: PBLoadParcelScenes | undefined;
  unloadScene: PBUnloadScene | undefined;
  setPosition: PBSetPosition | undefined;
  reset: Empty | undefined;
  createUIScene: PBCreateUIScene | undefined;
}

export interface PBAnimationState {
  clip: string;
  looping: boolean;
  weight: number;
  playing: boolean;
  shouldReset: boolean;
  speed: number;
}

export interface PBAnimator {
  withCollisions: boolean;
  visible: boolean;
}

export interface PBAudioClip {
  url: string;
  loop: boolean;
  volume: number;
}

export interface PBAudioSource {
  audioClip: PBAudioClip | undefined;
  audioClipId: string;
  loop: boolean;
  volume: number;
  playing: boolean;
  pitch: number;
}

export interface PBAvatarShape {
  id: string;
  baseUrl: string;
  name: string;
  bodyShape: PBWearable | undefined;
  wearables: PBWearable[];
  skin: PBSkin | undefined;
  hair: PBHair | undefined;
  eyes: PBEyes | undefined;
  eyebrows: PBFace | undefined;
  mouth: PBFace | undefined;
  useDummyModel: boolean;
  expressionTriggerId: string;
  expressionTriggerTimestamp: number;
  emotes: string[];
}

export interface PBWearable {
  categody: string;
  contentName: string;
  contents: PBContentMapping[];
}

export interface PBFace {
  texture: string;
}

export interface PBEyes {
  texture: string;
  mask: string;
  color: PBColor4 | undefined;
}

export interface PBHair {
  color: PBColor4 | undefined;
}

export interface PBSkin {
  color: PBColor4 | undefined;
}

export interface PBBasicMaterial {
  texture: PBTexture | undefined;
  alphaTest: number;
}

export interface PBBillboard {
  x: boolean;
  y: boolean;
  z: boolean;
}

export interface PBBoxShape {
  withCollisions: boolean;
  visible: boolean;
  uvs: number[];
}

export interface PBCircleShape {
  withCollisions: boolean;
  visible: boolean;
  segments: number;
  arc: number;
}

export interface PBConeShape {
  withCollisions: boolean;
  visible: boolean;
  radiusTop: number;
  radiusBottom: number;
  segmentsHeight: number;
  segmentsRadial: number;
  openEnded: boolean;
  radius: number;
  arc: number;
}

export interface PBCylinderShape {
  withCollisions: boolean;
  visible: boolean;
  radiusTop: number;
  radiusBottom: number;
  segmentsHeight: number;
  segmentsRadial: number;
  openEnded: boolean;
  radius: number;
  arc: number;
}

export interface PBGlobalPointerDown {
}

export interface PBGlobalPointerUp {
}

export interface PBGLTFShape {
  withCollisions: boolean;
  visible: boolean;
  src: string;
}

export interface PBMaterial {
  alpha: number;
  albedoColor: PBColor3 | undefined;
  emissiveColor: PBColor3 | undefined;
  metallic: number;
  roughness: number;
  ambientColor: PBColor3 | undefined;
  reflectionColor: PBColor3 | undefined;
  reflectivityColor: PBColor3 | undefined;
  directIntensity: number;
  microSurface: number;
  emissiveIntensity: number;
  environmentIntensity: number;
  specularIntensity: number;
  albedoTexture: PBTexture | undefined;
  alphaTexture: PBTexture | undefined;
  emissiveTexture: PBTexture | undefined;
  bumpTexture: PBTexture | undefined;
  refractionTexture: PBTexture | undefined;
  disableLighting: boolean;
  transparencyMode: number;
  hasAlpha: boolean;
}

export interface PBNFTShape {
  withCollisions: boolean;
  visible: boolean;
  src: string;
  color: PBColor3 | undefined;
}

export interface PBOBJShape {
  withCollisions: boolean;
  visible: boolean;
  src: string;
}

export interface PBPlaneShape {
  withCollisions: boolean;
  visible: boolean;
  width: number;
  height: number;
  uvs: number[];
}

export interface PBShape {
  withCollisions: boolean;
  visible: boolean;
}

export interface PBSphereShape {
  withCollisions: boolean;
  visible: boolean;
}

export interface PBTextShape {
  withCollisions: boolean;
  visible: boolean;
  outlineWidth: number;
  outlineColor: PBColor3 | undefined;
  color: PBColor3 | undefined;
  fontSize: number;
  fontWeight: string;
  opacity: number;
  value: string;
  lineSpacing: string;
  lineCount: number;
  resizeToFit: boolean;
  textWrapping: boolean;
  shadowBlur: number;
  shadowOffsetX: number;
  shadowOffsetY: number;
  shadowColor: PBColor3 | undefined;
  zIndex: number;
  hTextAlign: string;
  vTextAlign: string;
  width: number;
  height: number;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  isPickable: boolean;
  billboard: boolean;
}

export interface PBTexture {
  src: string;
  samplingMode: number;
  wrap: number;
  hasAlpha: boolean;
}

export interface PBUIButton {
  name: string;
  visible: boolean;
  opacity: number;
  hAlign: string;
  vAlign: string;
  width: string;
  height: string;
  positionX: string;
  positionY: string;
  isPointerBlocker: boolean;
  parent: PBUIShape | undefined;
  fontSize: number;
  fontWeight: string;
  thickness: number;
  cornerRadius: number;
  color: PBColor4 | undefined;
  background: PBColor4 | undefined;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  shadowBlur: number;
  shadowOffsetX: number;
  shadowOffsetY: number;
  shadowColor: PBColor4 | undefined;
  text: string;
}

export interface PBUICanvas {
  name: string;
  visible: boolean;
  opacity: number;
  hAlign: string;
  vAlign: string;
  width: string;
  height: string;
  positionX: string;
  positionY: string;
  isPointerBlocker: boolean;
  parent: PBUIShape | undefined;
}

export interface PBUIContainerRect {
  name: string;
  visible: boolean;
  opacity: number;
  hAlign: string;
  vAlign: string;
  width: string;
  height: string;
  positionX: string;
  positionY: string;
  isPointerBlocker: boolean;
  parent: PBUIShape | undefined;
  adaptWidth: boolean;
  adaptHeight: boolean;
  thickness: number;
  color: PBColor4 | undefined;
  alignmentUsesSize: boolean;
}

export interface PBUIContainerStack {
  name: string;
  visible: boolean;
  opacity: number;
  hAlign: string;
  vAlign: string;
  width: string;
  height: string;
  positionX: string;
  positionY: string;
  isPointerBlocker: boolean;
  parent: PBUIShape | undefined;
  adaptWidth: boolean;
  adaptHeight: boolean;
  color: PBColor4 | undefined;
  stackOrientation: PBUIStackOrientation;
  spacing: number;
}

export interface PBUIImage {
  name: string;
  visible: boolean;
  opacity: number;
  hAlign: string;
  vAlign: string;
  width: string;
  height: string;
  positionX: string;
  positionY: string;
  isPointerBlocker: boolean;
  parent: PBUIShape | undefined;
  sourceLeft: number;
  sourceTop: number;
  sourceWidth: number;
  sourceHeight: number;
  source: PBTexture | undefined;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  sizeInPixels: boolean;
  onClick: PBUUIDCallback | undefined;
}

export interface PBUUIDCallback {
  type: string;
  uuid: string;
}

export interface PBUIInputText {
  name: string;
  visible: boolean;
  opacity: number;
  hAlign: string;
  vAlign: string;
  width: string;
  height: string;
  positionX: string;
  positionY: string;
  isPointerBlocker: boolean;
  parent: PBUIShape | undefined;
  outlineWidth: number;
  outlineColor: PBColor4 | undefined;
  color: PBColor4 | undefined;
  thickness: number;
  fontSize: number;
  fontWeight: string;
  value: string;
  placeholderColor: PBColor4 | undefined;
  placeholder: string;
  margin: number;
  maxWidth: number;
  hTextAlign: string;
  vTextAlign: string;
  autoStretchWidth: boolean;
  background: PBColor4 | undefined;
  focusedBackground: PBColor4 | undefined;
  textWrapping: boolean;
  shadowBlur: number;
  shadowOffsetX: number;
  shadowOffsetY: number;
  shadowColor: PBColor4 | undefined;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  onTextSubmit: PBUUIDCallback | undefined;
  onChanged: PBUUIDCallback | undefined;
  onFocus: PBUUIDCallback | undefined;
  onBlur: PBUUIDCallback | undefined;
}

export interface PBUIScrollRect {
  name: string;
  visible: boolean;
  opacity: number;
  hAlign: string;
  vAlign: string;
  width: string;
  height: string;
  positionX: string;
  positionY: string;
  isPointerBlocker: boolean;
  parent: PBUIShape | undefined;
  valueX: number;
  valueY: number;
  borderColor: PBColor4 | undefined;
  backgroundColor: PBColor4 | undefined;
  isHorizontal: boolean;
  isVertical: boolean;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  onChanged: PBUUIDCallback | undefined;
}

export interface PBUIShape {
  name: string;
  visible: boolean;
  opacity: number;
  hAlign: string;
  vAlign: string;
  width: string;
  height: string;
  positionX: string;
  positionY: string;
  isPointerBlocker: boolean;
  parent: PBUIShape | undefined;
}

export interface PBUITextShape {
  name: string;
  visible: boolean;
  opacity: number;
  hAlign: string;
  vAlign: string;
  width: string;
  height: string;
  positionX: string;
  positionY: string;
  isPointerBlocker: boolean;
  parent: PBUIShape | undefined;
  outlineWidth: number;
  outlineColor: PBColor4 | undefined;
  color: PBColor4 | undefined;
  fontSize: number;
  fontAutoSize: boolean;
  fontWeight: string;
  value: string;
  lineSpacing: number;
  lineCount: number;
  adaptWidth: boolean;
  adaptHeight: boolean;
  textWrapping: boolean;
  shadowBlur: number;
  shadowOffsetX: number;
  shadowOffsetY: number;
  shadowColor: PBColor4 | undefined;
  hTextAlign: string;
  vTextAlign: string;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
}

export interface PBOpenExternalUrl {
  url: string;
}

export interface PBOpenNFTDialog {
  assetContractAddress: string;
  tokenId: string;
  comment: string;
}

function createBasePBCreateEntity(): PBCreateEntity {
  return { id: "" };
}

export const PBCreateEntity = {
  encode(message: PBCreateEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBCreateEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBCreateEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBCreateEntity {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: PBCreateEntity): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBCreateEntity>, I>>(object: I): PBCreateEntity {
    const message = createBasePBCreateEntity();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePBRemoveEntity(): PBRemoveEntity {
  return { id: "" };
}

export const PBRemoveEntity = {
  encode(message: PBRemoveEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBRemoveEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBRemoveEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBRemoveEntity {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: PBRemoveEntity): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBRemoveEntity>, I>>(object: I): PBRemoveEntity {
    const message = createBasePBRemoveEntity();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePBSetEntityParent(): PBSetEntityParent {
  return { entityId: "", parentId: "" };
}

export const PBSetEntityParent = {
  encode(message: PBSetEntityParent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.parentId !== "") {
      writer.uint32(18).string(message.parentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBSetEntityParent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBSetEntityParent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;
        case 2:
          message.parentId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBSetEntityParent {
    return {
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      parentId: isSet(object.parentId) ? String(object.parentId) : "",
    };
  },

  toJSON(message: PBSetEntityParent): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBSetEntityParent>, I>>(object: I): PBSetEntityParent {
    const message = createBasePBSetEntityParent();
    message.entityId = object.entityId ?? "";
    message.parentId = object.parentId ?? "";
    return message;
  },
};

function createBasePBComponentRemoved(): PBComponentRemoved {
  return { entityId: "", name: "" };
}

export const PBComponentRemoved = {
  encode(message: PBComponentRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBComponentRemoved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBComponentRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBComponentRemoved {
    return {
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: PBComponentRemoved): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBComponentRemoved>, I>>(object: I): PBComponentRemoved {
    const message = createBasePBComponentRemoved();
    message.entityId = object.entityId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBasePBComponent(): PBComponent {
  return {
    transform: undefined,
    uuidCallback: undefined,
    box: undefined,
    sphere: undefined,
    plane: undefined,
    cone: undefined,
    cylinder: undefined,
    text: undefined,
    nft: undefined,
    containerRect: undefined,
    containerStack: undefined,
    uiTextShape: undefined,
    uiInputTextShape: undefined,
    uiImageShape: undefined,
    circle: undefined,
    billboard: undefined,
    gltf: undefined,
    obj: undefined,
    avatar: undefined,
    basicMaterial: undefined,
    texture: undefined,
    audioClip: undefined,
    audioSource: undefined,
  };
}

export const PBComponent = {
  encode(message: PBComponent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transform !== undefined) {
      PBTransform.encode(message.transform, writer.uint32(10).fork()).ldelim();
    }
    if (message.uuidCallback !== undefined) {
      PBUUIDCallback.encode(message.uuidCallback, writer.uint32(66).fork()).ldelim();
    }
    if (message.box !== undefined) {
      PBBoxShape.encode(message.box, writer.uint32(130).fork()).ldelim();
    }
    if (message.sphere !== undefined) {
      PBSphereShape.encode(message.sphere, writer.uint32(138).fork()).ldelim();
    }
    if (message.plane !== undefined) {
      PBPlaneShape.encode(message.plane, writer.uint32(146).fork()).ldelim();
    }
    if (message.cone !== undefined) {
      PBConeShape.encode(message.cone, writer.uint32(154).fork()).ldelim();
    }
    if (message.cylinder !== undefined) {
      PBCylinderShape.encode(message.cylinder, writer.uint32(162).fork()).ldelim();
    }
    if (message.text !== undefined) {
      PBTextShape.encode(message.text, writer.uint32(170).fork()).ldelim();
    }
    if (message.nft !== undefined) {
      PBNFTShape.encode(message.nft, writer.uint32(178).fork()).ldelim();
    }
    if (message.containerRect !== undefined) {
      PBUIContainerRect.encode(message.containerRect, writer.uint32(202).fork()).ldelim();
    }
    if (message.containerStack !== undefined) {
      PBUIContainerStack.encode(message.containerStack, writer.uint32(210).fork()).ldelim();
    }
    if (message.uiTextShape !== undefined) {
      PBUITextShape.encode(message.uiTextShape, writer.uint32(218).fork()).ldelim();
    }
    if (message.uiInputTextShape !== undefined) {
      PBUIInputText.encode(message.uiInputTextShape, writer.uint32(226).fork()).ldelim();
    }
    if (message.uiImageShape !== undefined) {
      PBUIImage.encode(message.uiImageShape, writer.uint32(234).fork()).ldelim();
    }
    if (message.circle !== undefined) {
      PBCircleShape.encode(message.circle, writer.uint32(250).fork()).ldelim();
    }
    if (message.billboard !== undefined) {
      PBBillboard.encode(message.billboard, writer.uint32(258).fork()).ldelim();
    }
    if (message.gltf !== undefined) {
      PBGLTFShape.encode(message.gltf, writer.uint32(434).fork()).ldelim();
    }
    if (message.obj !== undefined) {
      PBOBJShape.encode(message.obj, writer.uint32(442).fork()).ldelim();
    }
    if (message.avatar !== undefined) {
      PBAvatarShape.encode(message.avatar, writer.uint32(450).fork()).ldelim();
    }
    if (message.basicMaterial !== undefined) {
      PBBasicMaterial.encode(message.basicMaterial, writer.uint32(514).fork()).ldelim();
    }
    if (message.texture !== undefined) {
      PBTexture.encode(message.texture, writer.uint32(546).fork()).ldelim();
    }
    if (message.audioClip !== undefined) {
      PBAudioClip.encode(message.audioClip, writer.uint32(1602).fork()).ldelim();
    }
    if (message.audioSource !== undefined) {
      PBAudioSource.encode(message.audioSource, writer.uint32(1610).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBComponent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBComponent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transform = PBTransform.decode(reader, reader.uint32());
          break;
        case 8:
          message.uuidCallback = PBUUIDCallback.decode(reader, reader.uint32());
          break;
        case 16:
          message.box = PBBoxShape.decode(reader, reader.uint32());
          break;
        case 17:
          message.sphere = PBSphereShape.decode(reader, reader.uint32());
          break;
        case 18:
          message.plane = PBPlaneShape.decode(reader, reader.uint32());
          break;
        case 19:
          message.cone = PBConeShape.decode(reader, reader.uint32());
          break;
        case 20:
          message.cylinder = PBCylinderShape.decode(reader, reader.uint32());
          break;
        case 21:
          message.text = PBTextShape.decode(reader, reader.uint32());
          break;
        case 22:
          message.nft = PBNFTShape.decode(reader, reader.uint32());
          break;
        case 25:
          message.containerRect = PBUIContainerRect.decode(reader, reader.uint32());
          break;
        case 26:
          message.containerStack = PBUIContainerStack.decode(reader, reader.uint32());
          break;
        case 27:
          message.uiTextShape = PBUITextShape.decode(reader, reader.uint32());
          break;
        case 28:
          message.uiInputTextShape = PBUIInputText.decode(reader, reader.uint32());
          break;
        case 29:
          message.uiImageShape = PBUIImage.decode(reader, reader.uint32());
          break;
        case 31:
          message.circle = PBCircleShape.decode(reader, reader.uint32());
          break;
        case 32:
          message.billboard = PBBillboard.decode(reader, reader.uint32());
          break;
        case 54:
          message.gltf = PBGLTFShape.decode(reader, reader.uint32());
          break;
        case 55:
          message.obj = PBOBJShape.decode(reader, reader.uint32());
          break;
        case 56:
          message.avatar = PBAvatarShape.decode(reader, reader.uint32());
          break;
        case 64:
          message.basicMaterial = PBBasicMaterial.decode(reader, reader.uint32());
          break;
        case 68:
          message.texture = PBTexture.decode(reader, reader.uint32());
          break;
        case 200:
          message.audioClip = PBAudioClip.decode(reader, reader.uint32());
          break;
        case 201:
          message.audioSource = PBAudioSource.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBComponent {
    return {
      transform: isSet(object.transform) ? PBTransform.fromJSON(object.transform) : undefined,
      uuidCallback: isSet(object.uuidCallback) ? PBUUIDCallback.fromJSON(object.uuidCallback) : undefined,
      box: isSet(object.box) ? PBBoxShape.fromJSON(object.box) : undefined,
      sphere: isSet(object.sphere) ? PBSphereShape.fromJSON(object.sphere) : undefined,
      plane: isSet(object.plane) ? PBPlaneShape.fromJSON(object.plane) : undefined,
      cone: isSet(object.cone) ? PBConeShape.fromJSON(object.cone) : undefined,
      cylinder: isSet(object.cylinder) ? PBCylinderShape.fromJSON(object.cylinder) : undefined,
      text: isSet(object.text) ? PBTextShape.fromJSON(object.text) : undefined,
      nft: isSet(object.nft) ? PBNFTShape.fromJSON(object.nft) : undefined,
      containerRect: isSet(object.containerRect) ? PBUIContainerRect.fromJSON(object.containerRect) : undefined,
      containerStack: isSet(object.containerStack) ? PBUIContainerStack.fromJSON(object.containerStack) : undefined,
      uiTextShape: isSet(object.uiTextShape) ? PBUITextShape.fromJSON(object.uiTextShape) : undefined,
      uiInputTextShape: isSet(object.uiInputTextShape) ? PBUIInputText.fromJSON(object.uiInputTextShape) : undefined,
      uiImageShape: isSet(object.uiImageShape) ? PBUIImage.fromJSON(object.uiImageShape) : undefined,
      circle: isSet(object.circle) ? PBCircleShape.fromJSON(object.circle) : undefined,
      billboard: isSet(object.billboard) ? PBBillboard.fromJSON(object.billboard) : undefined,
      gltf: isSet(object.gltf) ? PBGLTFShape.fromJSON(object.gltf) : undefined,
      obj: isSet(object.obj) ? PBOBJShape.fromJSON(object.obj) : undefined,
      avatar: isSet(object.avatar) ? PBAvatarShape.fromJSON(object.avatar) : undefined,
      basicMaterial: isSet(object.basicMaterial) ? PBBasicMaterial.fromJSON(object.basicMaterial) : undefined,
      texture: isSet(object.texture) ? PBTexture.fromJSON(object.texture) : undefined,
      audioClip: isSet(object.audioClip) ? PBAudioClip.fromJSON(object.audioClip) : undefined,
      audioSource: isSet(object.audioSource) ? PBAudioSource.fromJSON(object.audioSource) : undefined,
    };
  },

  toJSON(message: PBComponent): unknown {
    const obj: any = {};
    message.transform !== undefined &&
      (obj.transform = message.transform ? PBTransform.toJSON(message.transform) : undefined);
    message.uuidCallback !== undefined &&
      (obj.uuidCallback = message.uuidCallback ? PBUUIDCallback.toJSON(message.uuidCallback) : undefined);
    message.box !== undefined && (obj.box = message.box ? PBBoxShape.toJSON(message.box) : undefined);
    message.sphere !== undefined && (obj.sphere = message.sphere ? PBSphereShape.toJSON(message.sphere) : undefined);
    message.plane !== undefined && (obj.plane = message.plane ? PBPlaneShape.toJSON(message.plane) : undefined);
    message.cone !== undefined && (obj.cone = message.cone ? PBConeShape.toJSON(message.cone) : undefined);
    message.cylinder !== undefined &&
      (obj.cylinder = message.cylinder ? PBCylinderShape.toJSON(message.cylinder) : undefined);
    message.text !== undefined && (obj.text = message.text ? PBTextShape.toJSON(message.text) : undefined);
    message.nft !== undefined && (obj.nft = message.nft ? PBNFTShape.toJSON(message.nft) : undefined);
    message.containerRect !== undefined &&
      (obj.containerRect = message.containerRect ? PBUIContainerRect.toJSON(message.containerRect) : undefined);
    message.containerStack !== undefined &&
      (obj.containerStack = message.containerStack ? PBUIContainerStack.toJSON(message.containerStack) : undefined);
    message.uiTextShape !== undefined &&
      (obj.uiTextShape = message.uiTextShape ? PBUITextShape.toJSON(message.uiTextShape) : undefined);
    message.uiInputTextShape !== undefined &&
      (obj.uiInputTextShape = message.uiInputTextShape ? PBUIInputText.toJSON(message.uiInputTextShape) : undefined);
    message.uiImageShape !== undefined &&
      (obj.uiImageShape = message.uiImageShape ? PBUIImage.toJSON(message.uiImageShape) : undefined);
    message.circle !== undefined && (obj.circle = message.circle ? PBCircleShape.toJSON(message.circle) : undefined);
    message.billboard !== undefined &&
      (obj.billboard = message.billboard ? PBBillboard.toJSON(message.billboard) : undefined);
    message.gltf !== undefined && (obj.gltf = message.gltf ? PBGLTFShape.toJSON(message.gltf) : undefined);
    message.obj !== undefined && (obj.obj = message.obj ? PBOBJShape.toJSON(message.obj) : undefined);
    message.avatar !== undefined && (obj.avatar = message.avatar ? PBAvatarShape.toJSON(message.avatar) : undefined);
    message.basicMaterial !== undefined &&
      (obj.basicMaterial = message.basicMaterial ? PBBasicMaterial.toJSON(message.basicMaterial) : undefined);
    message.texture !== undefined && (obj.texture = message.texture ? PBTexture.toJSON(message.texture) : undefined);
    message.audioClip !== undefined &&
      (obj.audioClip = message.audioClip ? PBAudioClip.toJSON(message.audioClip) : undefined);
    message.audioSource !== undefined &&
      (obj.audioSource = message.audioSource ? PBAudioSource.toJSON(message.audioSource) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBComponent>, I>>(object: I): PBComponent {
    const message = createBasePBComponent();
    message.transform = (object.transform !== undefined && object.transform !== null)
      ? PBTransform.fromPartial(object.transform)
      : undefined;
    message.uuidCallback = (object.uuidCallback !== undefined && object.uuidCallback !== null)
      ? PBUUIDCallback.fromPartial(object.uuidCallback)
      : undefined;
    message.box = (object.box !== undefined && object.box !== null) ? PBBoxShape.fromPartial(object.box) : undefined;
    message.sphere = (object.sphere !== undefined && object.sphere !== null)
      ? PBSphereShape.fromPartial(object.sphere)
      : undefined;
    message.plane = (object.plane !== undefined && object.plane !== null)
      ? PBPlaneShape.fromPartial(object.plane)
      : undefined;
    message.cone = (object.cone !== undefined && object.cone !== null)
      ? PBConeShape.fromPartial(object.cone)
      : undefined;
    message.cylinder = (object.cylinder !== undefined && object.cylinder !== null)
      ? PBCylinderShape.fromPartial(object.cylinder)
      : undefined;
    message.text = (object.text !== undefined && object.text !== null)
      ? PBTextShape.fromPartial(object.text)
      : undefined;
    message.nft = (object.nft !== undefined && object.nft !== null) ? PBNFTShape.fromPartial(object.nft) : undefined;
    message.containerRect = (object.containerRect !== undefined && object.containerRect !== null)
      ? PBUIContainerRect.fromPartial(object.containerRect)
      : undefined;
    message.containerStack = (object.containerStack !== undefined && object.containerStack !== null)
      ? PBUIContainerStack.fromPartial(object.containerStack)
      : undefined;
    message.uiTextShape = (object.uiTextShape !== undefined && object.uiTextShape !== null)
      ? PBUITextShape.fromPartial(object.uiTextShape)
      : undefined;
    message.uiInputTextShape = (object.uiInputTextShape !== undefined && object.uiInputTextShape !== null)
      ? PBUIInputText.fromPartial(object.uiInputTextShape)
      : undefined;
    message.uiImageShape = (object.uiImageShape !== undefined && object.uiImageShape !== null)
      ? PBUIImage.fromPartial(object.uiImageShape)
      : undefined;
    message.circle = (object.circle !== undefined && object.circle !== null)
      ? PBCircleShape.fromPartial(object.circle)
      : undefined;
    message.billboard = (object.billboard !== undefined && object.billboard !== null)
      ? PBBillboard.fromPartial(object.billboard)
      : undefined;
    message.gltf = (object.gltf !== undefined && object.gltf !== null)
      ? PBGLTFShape.fromPartial(object.gltf)
      : undefined;
    message.obj = (object.obj !== undefined && object.obj !== null) ? PBOBJShape.fromPartial(object.obj) : undefined;
    message.avatar = (object.avatar !== undefined && object.avatar !== null)
      ? PBAvatarShape.fromPartial(object.avatar)
      : undefined;
    message.basicMaterial = (object.basicMaterial !== undefined && object.basicMaterial !== null)
      ? PBBasicMaterial.fromPartial(object.basicMaterial)
      : undefined;
    message.texture = (object.texture !== undefined && object.texture !== null)
      ? PBTexture.fromPartial(object.texture)
      : undefined;
    message.audioClip = (object.audioClip !== undefined && object.audioClip !== null)
      ? PBAudioClip.fromPartial(object.audioClip)
      : undefined;
    message.audioSource = (object.audioSource !== undefined && object.audioSource !== null)
      ? PBAudioSource.fromPartial(object.audioSource)
      : undefined;
    return message;
  },
};

function createBasePBColor4(): PBColor4 {
  return { r: 0, g: 0, b: 0, a: 0 };
}

export const PBColor4 = {
  encode(message: PBColor4, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.r !== 0) {
      writer.uint32(13).float(message.r);
    }
    if (message.g !== 0) {
      writer.uint32(21).float(message.g);
    }
    if (message.b !== 0) {
      writer.uint32(29).float(message.b);
    }
    if (message.a !== 0) {
      writer.uint32(37).float(message.a);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBColor4 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBColor4();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.r = reader.float();
          break;
        case 2:
          message.g = reader.float();
          break;
        case 3:
          message.b = reader.float();
          break;
        case 4:
          message.a = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBColor4 {
    return {
      r: isSet(object.r) ? Number(object.r) : 0,
      g: isSet(object.g) ? Number(object.g) : 0,
      b: isSet(object.b) ? Number(object.b) : 0,
      a: isSet(object.a) ? Number(object.a) : 0,
    };
  },

  toJSON(message: PBColor4): unknown {
    const obj: any = {};
    message.r !== undefined && (obj.r = message.r);
    message.g !== undefined && (obj.g = message.g);
    message.b !== undefined && (obj.b = message.b);
    message.a !== undefined && (obj.a = message.a);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBColor4>, I>>(object: I): PBColor4 {
    const message = createBasePBColor4();
    message.r = object.r ?? 0;
    message.g = object.g ?? 0;
    message.b = object.b ?? 0;
    message.a = object.a ?? 0;
    return message;
  },
};

function createBasePBColor3(): PBColor3 {
  return { r: 0, g: 0, b: 0 };
}

export const PBColor3 = {
  encode(message: PBColor3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.r !== 0) {
      writer.uint32(13).float(message.r);
    }
    if (message.g !== 0) {
      writer.uint32(21).float(message.g);
    }
    if (message.b !== 0) {
      writer.uint32(29).float(message.b);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBColor3 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBColor3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.r = reader.float();
          break;
        case 2:
          message.g = reader.float();
          break;
        case 3:
          message.b = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBColor3 {
    return {
      r: isSet(object.r) ? Number(object.r) : 0,
      g: isSet(object.g) ? Number(object.g) : 0,
      b: isSet(object.b) ? Number(object.b) : 0,
    };
  },

  toJSON(message: PBColor3): unknown {
    const obj: any = {};
    message.r !== undefined && (obj.r = message.r);
    message.g !== undefined && (obj.g = message.g);
    message.b !== undefined && (obj.b = message.b);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBColor3>, I>>(object: I): PBColor3 {
    const message = createBasePBColor3();
    message.r = object.r ?? 0;
    message.g = object.g ?? 0;
    message.b = object.b ?? 0;
    return message;
  },
};

function createBasePBTextShapeModel(): PBTextShapeModel {
  return {
    billboard: false,
    value: "",
    color: undefined,
    opacity: 0,
    fontSize: 0,
    fontAutoSize: false,
    fontWeight: "",
    hTextAlign: "",
    vTextAlign: "",
    width: 0,
    height: 0,
    adaptWidth: false,
    adaptHeight: false,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    lineSpacing: 0,
    lineCount: 0,
    textWrapping: false,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: undefined,
    outlineWidth: 0,
    outlineColor: undefined,
  };
}

export const PBTextShapeModel = {
  encode(message: PBTextShapeModel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.billboard === true) {
      writer.uint32(8).bool(message.billboard);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.color !== undefined) {
      PBColor3.encode(message.color, writer.uint32(26).fork()).ldelim();
    }
    if (message.opacity !== 0) {
      writer.uint32(37).float(message.opacity);
    }
    if (message.fontSize !== 0) {
      writer.uint32(45).float(message.fontSize);
    }
    if (message.fontAutoSize === true) {
      writer.uint32(48).bool(message.fontAutoSize);
    }
    if (message.fontWeight !== "") {
      writer.uint32(58).string(message.fontWeight);
    }
    if (message.hTextAlign !== "") {
      writer.uint32(66).string(message.hTextAlign);
    }
    if (message.vTextAlign !== "") {
      writer.uint32(74).string(message.vTextAlign);
    }
    if (message.width !== 0) {
      writer.uint32(85).float(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(93).float(message.height);
    }
    if (message.adaptWidth === true) {
      writer.uint32(96).bool(message.adaptWidth);
    }
    if (message.adaptHeight === true) {
      writer.uint32(104).bool(message.adaptHeight);
    }
    if (message.paddingTop !== 0) {
      writer.uint32(117).float(message.paddingTop);
    }
    if (message.paddingRight !== 0) {
      writer.uint32(125).float(message.paddingRight);
    }
    if (message.paddingBottom !== 0) {
      writer.uint32(133).float(message.paddingBottom);
    }
    if (message.paddingLeft !== 0) {
      writer.uint32(141).float(message.paddingLeft);
    }
    if (message.lineSpacing !== 0) {
      writer.uint32(149).float(message.lineSpacing);
    }
    if (message.lineCount !== 0) {
      writer.uint32(152).int32(message.lineCount);
    }
    if (message.textWrapping === true) {
      writer.uint32(160).bool(message.textWrapping);
    }
    if (message.shadowBlur !== 0) {
      writer.uint32(173).float(message.shadowBlur);
    }
    if (message.shadowOffsetX !== 0) {
      writer.uint32(181).float(message.shadowOffsetX);
    }
    if (message.shadowOffsetY !== 0) {
      writer.uint32(189).float(message.shadowOffsetY);
    }
    if (message.shadowColor !== undefined) {
      PBColor3.encode(message.shadowColor, writer.uint32(194).fork()).ldelim();
    }
    if (message.outlineWidth !== 0) {
      writer.uint32(205).float(message.outlineWidth);
    }
    if (message.outlineColor !== undefined) {
      PBColor3.encode(message.outlineColor, writer.uint32(210).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBTextShapeModel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBTextShapeModel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.billboard = reader.bool();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.color = PBColor3.decode(reader, reader.uint32());
          break;
        case 4:
          message.opacity = reader.float();
          break;
        case 5:
          message.fontSize = reader.float();
          break;
        case 6:
          message.fontAutoSize = reader.bool();
          break;
        case 7:
          message.fontWeight = reader.string();
          break;
        case 8:
          message.hTextAlign = reader.string();
          break;
        case 9:
          message.vTextAlign = reader.string();
          break;
        case 10:
          message.width = reader.float();
          break;
        case 11:
          message.height = reader.float();
          break;
        case 12:
          message.adaptWidth = reader.bool();
          break;
        case 13:
          message.adaptHeight = reader.bool();
          break;
        case 14:
          message.paddingTop = reader.float();
          break;
        case 15:
          message.paddingRight = reader.float();
          break;
        case 16:
          message.paddingBottom = reader.float();
          break;
        case 17:
          message.paddingLeft = reader.float();
          break;
        case 18:
          message.lineSpacing = reader.float();
          break;
        case 19:
          message.lineCount = reader.int32();
          break;
        case 20:
          message.textWrapping = reader.bool();
          break;
        case 21:
          message.shadowBlur = reader.float();
          break;
        case 22:
          message.shadowOffsetX = reader.float();
          break;
        case 23:
          message.shadowOffsetY = reader.float();
          break;
        case 24:
          message.shadowColor = PBColor3.decode(reader, reader.uint32());
          break;
        case 25:
          message.outlineWidth = reader.float();
          break;
        case 26:
          message.outlineColor = PBColor3.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBTextShapeModel {
    return {
      billboard: isSet(object.billboard) ? Boolean(object.billboard) : false,
      value: isSet(object.value) ? String(object.value) : "",
      color: isSet(object.color) ? PBColor3.fromJSON(object.color) : undefined,
      opacity: isSet(object.opacity) ? Number(object.opacity) : 0,
      fontSize: isSet(object.fontSize) ? Number(object.fontSize) : 0,
      fontAutoSize: isSet(object.fontAutoSize) ? Boolean(object.fontAutoSize) : false,
      fontWeight: isSet(object.fontWeight) ? String(object.fontWeight) : "",
      hTextAlign: isSet(object.hTextAlign) ? String(object.hTextAlign) : "",
      vTextAlign: isSet(object.vTextAlign) ? String(object.vTextAlign) : "",
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      adaptWidth: isSet(object.adaptWidth) ? Boolean(object.adaptWidth) : false,
      adaptHeight: isSet(object.adaptHeight) ? Boolean(object.adaptHeight) : false,
      paddingTop: isSet(object.paddingTop) ? Number(object.paddingTop) : 0,
      paddingRight: isSet(object.paddingRight) ? Number(object.paddingRight) : 0,
      paddingBottom: isSet(object.paddingBottom) ? Number(object.paddingBottom) : 0,
      paddingLeft: isSet(object.paddingLeft) ? Number(object.paddingLeft) : 0,
      lineSpacing: isSet(object.lineSpacing) ? Number(object.lineSpacing) : 0,
      lineCount: isSet(object.lineCount) ? Number(object.lineCount) : 0,
      textWrapping: isSet(object.textWrapping) ? Boolean(object.textWrapping) : false,
      shadowBlur: isSet(object.shadowBlur) ? Number(object.shadowBlur) : 0,
      shadowOffsetX: isSet(object.shadowOffsetX) ? Number(object.shadowOffsetX) : 0,
      shadowOffsetY: isSet(object.shadowOffsetY) ? Number(object.shadowOffsetY) : 0,
      shadowColor: isSet(object.shadowColor) ? PBColor3.fromJSON(object.shadowColor) : undefined,
      outlineWidth: isSet(object.outlineWidth) ? Number(object.outlineWidth) : 0,
      outlineColor: isSet(object.outlineColor) ? PBColor3.fromJSON(object.outlineColor) : undefined,
    };
  },

  toJSON(message: PBTextShapeModel): unknown {
    const obj: any = {};
    message.billboard !== undefined && (obj.billboard = message.billboard);
    message.value !== undefined && (obj.value = message.value);
    message.color !== undefined && (obj.color = message.color ? PBColor3.toJSON(message.color) : undefined);
    message.opacity !== undefined && (obj.opacity = message.opacity);
    message.fontSize !== undefined && (obj.fontSize = message.fontSize);
    message.fontAutoSize !== undefined && (obj.fontAutoSize = message.fontAutoSize);
    message.fontWeight !== undefined && (obj.fontWeight = message.fontWeight);
    message.hTextAlign !== undefined && (obj.hTextAlign = message.hTextAlign);
    message.vTextAlign !== undefined && (obj.vTextAlign = message.vTextAlign);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.adaptWidth !== undefined && (obj.adaptWidth = message.adaptWidth);
    message.adaptHeight !== undefined && (obj.adaptHeight = message.adaptHeight);
    message.paddingTop !== undefined && (obj.paddingTop = message.paddingTop);
    message.paddingRight !== undefined && (obj.paddingRight = message.paddingRight);
    message.paddingBottom !== undefined && (obj.paddingBottom = message.paddingBottom);
    message.paddingLeft !== undefined && (obj.paddingLeft = message.paddingLeft);
    message.lineSpacing !== undefined && (obj.lineSpacing = message.lineSpacing);
    message.lineCount !== undefined && (obj.lineCount = Math.round(message.lineCount));
    message.textWrapping !== undefined && (obj.textWrapping = message.textWrapping);
    message.shadowBlur !== undefined && (obj.shadowBlur = message.shadowBlur);
    message.shadowOffsetX !== undefined && (obj.shadowOffsetX = message.shadowOffsetX);
    message.shadowOffsetY !== undefined && (obj.shadowOffsetY = message.shadowOffsetY);
    message.shadowColor !== undefined &&
      (obj.shadowColor = message.shadowColor ? PBColor3.toJSON(message.shadowColor) : undefined);
    message.outlineWidth !== undefined && (obj.outlineWidth = message.outlineWidth);
    message.outlineColor !== undefined &&
      (obj.outlineColor = message.outlineColor ? PBColor3.toJSON(message.outlineColor) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBTextShapeModel>, I>>(object: I): PBTextShapeModel {
    const message = createBasePBTextShapeModel();
    message.billboard = object.billboard ?? false;
    message.value = object.value ?? "";
    message.color = (object.color !== undefined && object.color !== null)
      ? PBColor3.fromPartial(object.color)
      : undefined;
    message.opacity = object.opacity ?? 0;
    message.fontSize = object.fontSize ?? 0;
    message.fontAutoSize = object.fontAutoSize ?? false;
    message.fontWeight = object.fontWeight ?? "";
    message.hTextAlign = object.hTextAlign ?? "";
    message.vTextAlign = object.vTextAlign ?? "";
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.adaptWidth = object.adaptWidth ?? false;
    message.adaptHeight = object.adaptHeight ?? false;
    message.paddingTop = object.paddingTop ?? 0;
    message.paddingRight = object.paddingRight ?? 0;
    message.paddingBottom = object.paddingBottom ?? 0;
    message.paddingLeft = object.paddingLeft ?? 0;
    message.lineSpacing = object.lineSpacing ?? 0;
    message.lineCount = object.lineCount ?? 0;
    message.textWrapping = object.textWrapping ?? false;
    message.shadowBlur = object.shadowBlur ?? 0;
    message.shadowOffsetX = object.shadowOffsetX ?? 0;
    message.shadowOffsetY = object.shadowOffsetY ?? 0;
    message.shadowColor = (object.shadowColor !== undefined && object.shadowColor !== null)
      ? PBColor3.fromPartial(object.shadowColor)
      : undefined;
    message.outlineWidth = object.outlineWidth ?? 0;
    message.outlineColor = (object.outlineColor !== undefined && object.outlineColor !== null)
      ? PBColor3.fromPartial(object.outlineColor)
      : undefined;
    return message;
  },
};

function createBasePBVector3(): PBVector3 {
  return { x: 0, y: 0, z: 0 };
}

export const PBVector3 = {
  encode(message: PBVector3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBVector3 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBVector3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float();
          break;
        case 2:
          message.y = reader.float();
          break;
        case 3:
          message.z = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBVector3 {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
    };
  },

  toJSON(message: PBVector3): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBVector3>, I>>(object: I): PBVector3 {
    const message = createBasePBVector3();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    return message;
  },
};

function createBasePBQuaternion(): PBQuaternion {
  return { x: 0, y: 0, z: 0, w: 0 };
}

export const PBQuaternion = {
  encode(message: PBQuaternion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(9).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(17).double(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(25).double(message.z);
    }
    if (message.w !== 0) {
      writer.uint32(33).double(message.w);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBQuaternion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBQuaternion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.double();
          break;
        case 2:
          message.y = reader.double();
          break;
        case 3:
          message.z = reader.double();
          break;
        case 4:
          message.w = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBQuaternion {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
      w: isSet(object.w) ? Number(object.w) : 0,
    };
  },

  toJSON(message: PBQuaternion): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    message.w !== undefined && (obj.w = message.w);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBQuaternion>, I>>(object: I): PBQuaternion {
    const message = createBasePBQuaternion();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    message.w = object.w ?? 0;
    return message;
  },
};

function createBasePBTransform(): PBTransform {
  return { position: undefined, rotation: undefined, scale: undefined };
}

export const PBTransform = {
  encode(message: PBTransform, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      PBVector3.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.rotation !== undefined) {
      PBQuaternion.encode(message.rotation, writer.uint32(18).fork()).ldelim();
    }
    if (message.scale !== undefined) {
      PBVector3.encode(message.scale, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBTransform {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBTransform();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = PBVector3.decode(reader, reader.uint32());
          break;
        case 2:
          message.rotation = PBQuaternion.decode(reader, reader.uint32());
          break;
        case 3:
          message.scale = PBVector3.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBTransform {
    return {
      position: isSet(object.position) ? PBVector3.fromJSON(object.position) : undefined,
      rotation: isSet(object.rotation) ? PBQuaternion.fromJSON(object.rotation) : undefined,
      scale: isSet(object.scale) ? PBVector3.fromJSON(object.scale) : undefined,
    };
  },

  toJSON(message: PBTransform): unknown {
    const obj: any = {};
    message.position !== undefined &&
      (obj.position = message.position ? PBVector3.toJSON(message.position) : undefined);
    message.rotation !== undefined &&
      (obj.rotation = message.rotation ? PBQuaternion.toJSON(message.rotation) : undefined);
    message.scale !== undefined && (obj.scale = message.scale ? PBVector3.toJSON(message.scale) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBTransform>, I>>(object: I): PBTransform {
    const message = createBasePBTransform();
    message.position = (object.position !== undefined && object.position !== null)
      ? PBVector3.fromPartial(object.position)
      : undefined;
    message.rotation = (object.rotation !== undefined && object.rotation !== null)
      ? PBQuaternion.fromPartial(object.rotation)
      : undefined;
    message.scale = (object.scale !== undefined && object.scale !== null)
      ? PBVector3.fromPartial(object.scale)
      : undefined;
    return message;
  },
};

function createBasePBUpdateEntityComponent(): PBUpdateEntityComponent {
  return { entityId: "", classId: 0, name: "", data: "" };
}

export const PBUpdateEntityComponent = {
  encode(message: PBUpdateEntityComponent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.classId !== 0) {
      writer.uint32(16).int32(message.classId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBUpdateEntityComponent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBUpdateEntityComponent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;
        case 2:
          message.classId = reader.int32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBUpdateEntityComponent {
    return {
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      classId: isSet(object.classId) ? Number(object.classId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      data: isSet(object.data) ? String(object.data) : "",
    };
  },

  toJSON(message: PBUpdateEntityComponent): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.classId !== undefined && (obj.classId = Math.round(message.classId));
    message.name !== undefined && (obj.name = message.name);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBUpdateEntityComponent>, I>>(object: I): PBUpdateEntityComponent {
    const message = createBasePBUpdateEntityComponent();
    message.entityId = object.entityId ?? "";
    message.classId = object.classId ?? 0;
    message.name = object.name ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

function createBasePBComponentCreated(): PBComponentCreated {
  return { id: "", classid: 0, name: "" };
}

export const PBComponentCreated = {
  encode(message: PBComponentCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.classid !== 0) {
      writer.uint32(16).int32(message.classid);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBComponentCreated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBComponentCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.classid = reader.int32();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBComponentCreated {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      classid: isSet(object.classid) ? Number(object.classid) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: PBComponentCreated): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.classid !== undefined && (obj.classid = Math.round(message.classid));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBComponentCreated>, I>>(object: I): PBComponentCreated {
    const message = createBasePBComponentCreated();
    message.id = object.id ?? "";
    message.classid = object.classid ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBasePBAttachEntityComponent(): PBAttachEntityComponent {
  return { entityId: "", name: "", id: "" };
}

export const PBAttachEntityComponent = {
  encode(message: PBAttachEntityComponent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBAttachEntityComponent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBAttachEntityComponent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBAttachEntityComponent {
    return {
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: PBAttachEntityComponent): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.name !== undefined && (obj.name = message.name);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBAttachEntityComponent>, I>>(object: I): PBAttachEntityComponent {
    const message = createBasePBAttachEntityComponent();
    message.entityId = object.entityId ?? "";
    message.name = object.name ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePBComponentDisposed(): PBComponentDisposed {
  return { id: "" };
}

export const PBComponentDisposed = {
  encode(message: PBComponentDisposed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBComponentDisposed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBComponentDisposed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBComponentDisposed {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: PBComponentDisposed): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBComponentDisposed>, I>>(object: I): PBComponentDisposed {
    const message = createBasePBComponentDisposed();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePBComponentUpdated(): PBComponentUpdated {
  return { id: "", json: "" };
}

export const PBComponentUpdated = {
  encode(message: PBComponentUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.json !== "") {
      writer.uint32(18).string(message.json);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBComponentUpdated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBComponentUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.json = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBComponentUpdated {
    return { id: isSet(object.id) ? String(object.id) : "", json: isSet(object.json) ? String(object.json) : "" };
  },

  toJSON(message: PBComponentUpdated): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.json !== undefined && (obj.json = message.json);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBComponentUpdated>, I>>(object: I): PBComponentUpdated {
    const message = createBasePBComponentUpdated();
    message.id = object.id ?? "";
    message.json = object.json ?? "";
    return message;
  },
};

function createBasePBRay(): PBRay {
  return { origin: undefined, direction: undefined, distance: 0 };
}

export const PBRay = {
  encode(message: PBRay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      PBVector3.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.direction !== undefined) {
      PBVector3.encode(message.direction, writer.uint32(18).fork()).ldelim();
    }
    if (message.distance !== 0) {
      writer.uint32(29).float(message.distance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBRay {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBRay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.origin = PBVector3.decode(reader, reader.uint32());
          break;
        case 2:
          message.direction = PBVector3.decode(reader, reader.uint32());
          break;
        case 3:
          message.distance = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBRay {
    return {
      origin: isSet(object.origin) ? PBVector3.fromJSON(object.origin) : undefined,
      direction: isSet(object.direction) ? PBVector3.fromJSON(object.direction) : undefined,
      distance: isSet(object.distance) ? Number(object.distance) : 0,
    };
  },

  toJSON(message: PBRay): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? PBVector3.toJSON(message.origin) : undefined);
    message.direction !== undefined &&
      (obj.direction = message.direction ? PBVector3.toJSON(message.direction) : undefined);
    message.distance !== undefined && (obj.distance = message.distance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBRay>, I>>(object: I): PBRay {
    const message = createBasePBRay();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? PBVector3.fromPartial(object.origin)
      : undefined;
    message.direction = (object.direction !== undefined && object.direction !== null)
      ? PBVector3.fromPartial(object.direction)
      : undefined;
    message.distance = object.distance ?? 0;
    return message;
  },
};

function createBasePBRayQuery(): PBRayQuery {
  return { queryId: "", queryType: "", ray: undefined };
}

export const PBRayQuery = {
  encode(message: PBRayQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryId !== "") {
      writer.uint32(10).string(message.queryId);
    }
    if (message.queryType !== "") {
      writer.uint32(18).string(message.queryType);
    }
    if (message.ray !== undefined) {
      PBRay.encode(message.ray, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBRayQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBRayQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryId = reader.string();
          break;
        case 2:
          message.queryType = reader.string();
          break;
        case 3:
          message.ray = PBRay.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBRayQuery {
    return {
      queryId: isSet(object.queryId) ? String(object.queryId) : "",
      queryType: isSet(object.queryType) ? String(object.queryType) : "",
      ray: isSet(object.ray) ? PBRay.fromJSON(object.ray) : undefined,
    };
  },

  toJSON(message: PBRayQuery): unknown {
    const obj: any = {};
    message.queryId !== undefined && (obj.queryId = message.queryId);
    message.queryType !== undefined && (obj.queryType = message.queryType);
    message.ray !== undefined && (obj.ray = message.ray ? PBRay.toJSON(message.ray) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBRayQuery>, I>>(object: I): PBRayQuery {
    const message = createBasePBRayQuery();
    message.queryId = object.queryId ?? "";
    message.queryType = object.queryType ?? "";
    message.ray = (object.ray !== undefined && object.ray !== null) ? PBRay.fromPartial(object.ray) : undefined;
    return message;
  },
};

function createBasePBQuery(): PBQuery {
  return { queryId: "", payload: "" };
}

export const PBQuery = {
  encode(message: PBQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryId !== "") {
      writer.uint32(10).string(message.queryId);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryId = reader.string();
          break;
        case 2:
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBQuery {
    return {
      queryId: isSet(object.queryId) ? String(object.queryId) : "",
      payload: isSet(object.payload) ? String(object.payload) : "",
    };
  },

  toJSON(message: PBQuery): unknown {
    const obj: any = {};
    message.queryId !== undefined && (obj.queryId = message.queryId);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBQuery>, I>>(object: I): PBQuery {
    const message = createBasePBQuery();
    message.queryId = object.queryId ?? "";
    message.payload = object.payload ?? "";
    return message;
  },
};

function createBasePBSendSceneMessage(): PBSendSceneMessage {
  return {
    sceneId: "",
    tag: "",
    createEntity: undefined,
    removeEntity: undefined,
    setEntityParent: undefined,
    updateEntityComponent: undefined,
    attachEntityComponent: undefined,
    componentCreated: undefined,
    componentDisposed: undefined,
    componentRemoved: undefined,
    componentUpdated: undefined,
    query: undefined,
    sceneStarted: undefined,
    openExternalUrl: undefined,
    openNFTDialog: undefined,
    sceneNumber: 0,
  };
}

export const PBSendSceneMessage = {
  encode(message: PBSendSceneMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sceneId !== "") {
      writer.uint32(10).string(message.sceneId);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    if (message.createEntity !== undefined) {
      PBCreateEntity.encode(message.createEntity, writer.uint32(26).fork()).ldelim();
    }
    if (message.removeEntity !== undefined) {
      PBRemoveEntity.encode(message.removeEntity, writer.uint32(34).fork()).ldelim();
    }
    if (message.setEntityParent !== undefined) {
      PBSetEntityParent.encode(message.setEntityParent, writer.uint32(42).fork()).ldelim();
    }
    if (message.updateEntityComponent !== undefined) {
      PBUpdateEntityComponent.encode(message.updateEntityComponent, writer.uint32(50).fork()).ldelim();
    }
    if (message.attachEntityComponent !== undefined) {
      PBAttachEntityComponent.encode(message.attachEntityComponent, writer.uint32(58).fork()).ldelim();
    }
    if (message.componentCreated !== undefined) {
      PBComponentCreated.encode(message.componentCreated, writer.uint32(66).fork()).ldelim();
    }
    if (message.componentDisposed !== undefined) {
      PBComponentDisposed.encode(message.componentDisposed, writer.uint32(74).fork()).ldelim();
    }
    if (message.componentRemoved !== undefined) {
      PBComponentRemoved.encode(message.componentRemoved, writer.uint32(82).fork()).ldelim();
    }
    if (message.componentUpdated !== undefined) {
      PBComponentUpdated.encode(message.componentUpdated, writer.uint32(90).fork()).ldelim();
    }
    if (message.query !== undefined) {
      PBQuery.encode(message.query, writer.uint32(98).fork()).ldelim();
    }
    if (message.sceneStarted !== undefined) {
      Empty.encode(message.sceneStarted, writer.uint32(106).fork()).ldelim();
    }
    if (message.openExternalUrl !== undefined) {
      PBOpenExternalUrl.encode(message.openExternalUrl, writer.uint32(114).fork()).ldelim();
    }
    if (message.openNFTDialog !== undefined) {
      PBOpenNFTDialog.encode(message.openNFTDialog, writer.uint32(122).fork()).ldelim();
    }
    if (message.sceneNumber !== 0) {
      writer.uint32(792).int32(message.sceneNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBSendSceneMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBSendSceneMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sceneId = reader.string();
          break;
        case 2:
          message.tag = reader.string();
          break;
        case 3:
          message.createEntity = PBCreateEntity.decode(reader, reader.uint32());
          break;
        case 4:
          message.removeEntity = PBRemoveEntity.decode(reader, reader.uint32());
          break;
        case 5:
          message.setEntityParent = PBSetEntityParent.decode(reader, reader.uint32());
          break;
        case 6:
          message.updateEntityComponent = PBUpdateEntityComponent.decode(reader, reader.uint32());
          break;
        case 7:
          message.attachEntityComponent = PBAttachEntityComponent.decode(reader, reader.uint32());
          break;
        case 8:
          message.componentCreated = PBComponentCreated.decode(reader, reader.uint32());
          break;
        case 9:
          message.componentDisposed = PBComponentDisposed.decode(reader, reader.uint32());
          break;
        case 10:
          message.componentRemoved = PBComponentRemoved.decode(reader, reader.uint32());
          break;
        case 11:
          message.componentUpdated = PBComponentUpdated.decode(reader, reader.uint32());
          break;
        case 12:
          message.query = PBQuery.decode(reader, reader.uint32());
          break;
        case 13:
          message.sceneStarted = Empty.decode(reader, reader.uint32());
          break;
        case 14:
          message.openExternalUrl = PBOpenExternalUrl.decode(reader, reader.uint32());
          break;
        case 15:
          message.openNFTDialog = PBOpenNFTDialog.decode(reader, reader.uint32());
          break;
        case 99:
          message.sceneNumber = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBSendSceneMessage {
    return {
      sceneId: isSet(object.sceneId) ? String(object.sceneId) : "",
      tag: isSet(object.tag) ? String(object.tag) : "",
      createEntity: isSet(object.createEntity) ? PBCreateEntity.fromJSON(object.createEntity) : undefined,
      removeEntity: isSet(object.removeEntity) ? PBRemoveEntity.fromJSON(object.removeEntity) : undefined,
      setEntityParent: isSet(object.setEntityParent) ? PBSetEntityParent.fromJSON(object.setEntityParent) : undefined,
      updateEntityComponent: isSet(object.updateEntityComponent)
        ? PBUpdateEntityComponent.fromJSON(object.updateEntityComponent)
        : undefined,
      attachEntityComponent: isSet(object.attachEntityComponent)
        ? PBAttachEntityComponent.fromJSON(object.attachEntityComponent)
        : undefined,
      componentCreated: isSet(object.componentCreated)
        ? PBComponentCreated.fromJSON(object.componentCreated)
        : undefined,
      componentDisposed: isSet(object.componentDisposed)
        ? PBComponentDisposed.fromJSON(object.componentDisposed)
        : undefined,
      componentRemoved: isSet(object.componentRemoved)
        ? PBComponentRemoved.fromJSON(object.componentRemoved)
        : undefined,
      componentUpdated: isSet(object.componentUpdated)
        ? PBComponentUpdated.fromJSON(object.componentUpdated)
        : undefined,
      query: isSet(object.query) ? PBQuery.fromJSON(object.query) : undefined,
      sceneStarted: isSet(object.sceneStarted) ? Empty.fromJSON(object.sceneStarted) : undefined,
      openExternalUrl: isSet(object.openExternalUrl) ? PBOpenExternalUrl.fromJSON(object.openExternalUrl) : undefined,
      openNFTDialog: isSet(object.openNFTDialog) ? PBOpenNFTDialog.fromJSON(object.openNFTDialog) : undefined,
      sceneNumber: isSet(object.sceneNumber) ? Number(object.sceneNumber) : 0,
    };
  },

  toJSON(message: PBSendSceneMessage): unknown {
    const obj: any = {};
    message.sceneId !== undefined && (obj.sceneId = message.sceneId);
    message.tag !== undefined && (obj.tag = message.tag);
    message.createEntity !== undefined &&
      (obj.createEntity = message.createEntity ? PBCreateEntity.toJSON(message.createEntity) : undefined);
    message.removeEntity !== undefined &&
      (obj.removeEntity = message.removeEntity ? PBRemoveEntity.toJSON(message.removeEntity) : undefined);
    message.setEntityParent !== undefined &&
      (obj.setEntityParent = message.setEntityParent ? PBSetEntityParent.toJSON(message.setEntityParent) : undefined);
    message.updateEntityComponent !== undefined && (obj.updateEntityComponent = message.updateEntityComponent
      ? PBUpdateEntityComponent.toJSON(message.updateEntityComponent)
      : undefined);
    message.attachEntityComponent !== undefined && (obj.attachEntityComponent = message.attachEntityComponent
      ? PBAttachEntityComponent.toJSON(message.attachEntityComponent)
      : undefined);
    message.componentCreated !== undefined &&
      (obj.componentCreated = message.componentCreated
        ? PBComponentCreated.toJSON(message.componentCreated)
        : undefined);
    message.componentDisposed !== undefined && (obj.componentDisposed = message.componentDisposed
      ? PBComponentDisposed.toJSON(message.componentDisposed)
      : undefined);
    message.componentRemoved !== undefined &&
      (obj.componentRemoved = message.componentRemoved
        ? PBComponentRemoved.toJSON(message.componentRemoved)
        : undefined);
    message.componentUpdated !== undefined &&
      (obj.componentUpdated = message.componentUpdated
        ? PBComponentUpdated.toJSON(message.componentUpdated)
        : undefined);
    message.query !== undefined && (obj.query = message.query ? PBQuery.toJSON(message.query) : undefined);
    message.sceneStarted !== undefined &&
      (obj.sceneStarted = message.sceneStarted ? Empty.toJSON(message.sceneStarted) : undefined);
    message.openExternalUrl !== undefined &&
      (obj.openExternalUrl = message.openExternalUrl ? PBOpenExternalUrl.toJSON(message.openExternalUrl) : undefined);
    message.openNFTDialog !== undefined &&
      (obj.openNFTDialog = message.openNFTDialog ? PBOpenNFTDialog.toJSON(message.openNFTDialog) : undefined);
    message.sceneNumber !== undefined && (obj.sceneNumber = Math.round(message.sceneNumber));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBSendSceneMessage>, I>>(object: I): PBSendSceneMessage {
    const message = createBasePBSendSceneMessage();
    message.sceneId = object.sceneId ?? "";
    message.tag = object.tag ?? "";
    message.createEntity = (object.createEntity !== undefined && object.createEntity !== null)
      ? PBCreateEntity.fromPartial(object.createEntity)
      : undefined;
    message.removeEntity = (object.removeEntity !== undefined && object.removeEntity !== null)
      ? PBRemoveEntity.fromPartial(object.removeEntity)
      : undefined;
    message.setEntityParent = (object.setEntityParent !== undefined && object.setEntityParent !== null)
      ? PBSetEntityParent.fromPartial(object.setEntityParent)
      : undefined;
    message.updateEntityComponent =
      (object.updateEntityComponent !== undefined && object.updateEntityComponent !== null)
        ? PBUpdateEntityComponent.fromPartial(object.updateEntityComponent)
        : undefined;
    message.attachEntityComponent =
      (object.attachEntityComponent !== undefined && object.attachEntityComponent !== null)
        ? PBAttachEntityComponent.fromPartial(object.attachEntityComponent)
        : undefined;
    message.componentCreated = (object.componentCreated !== undefined && object.componentCreated !== null)
      ? PBComponentCreated.fromPartial(object.componentCreated)
      : undefined;
    message.componentDisposed = (object.componentDisposed !== undefined && object.componentDisposed !== null)
      ? PBComponentDisposed.fromPartial(object.componentDisposed)
      : undefined;
    message.componentRemoved = (object.componentRemoved !== undefined && object.componentRemoved !== null)
      ? PBComponentRemoved.fromPartial(object.componentRemoved)
      : undefined;
    message.componentUpdated = (object.componentUpdated !== undefined && object.componentUpdated !== null)
      ? PBComponentUpdated.fromPartial(object.componentUpdated)
      : undefined;
    message.query = (object.query !== undefined && object.query !== null)
      ? PBQuery.fromPartial(object.query)
      : undefined;
    message.sceneStarted = (object.sceneStarted !== undefined && object.sceneStarted !== null)
      ? Empty.fromPartial(object.sceneStarted)
      : undefined;
    message.openExternalUrl = (object.openExternalUrl !== undefined && object.openExternalUrl !== null)
      ? PBOpenExternalUrl.fromPartial(object.openExternalUrl)
      : undefined;
    message.openNFTDialog = (object.openNFTDialog !== undefined && object.openNFTDialog !== null)
      ? PBOpenNFTDialog.fromPartial(object.openNFTDialog)
      : undefined;
    message.sceneNumber = object.sceneNumber ?? 0;
    return message;
  },
};

function createBasePBSetPosition(): PBSetPosition {
  return { x: 0, y: 0, z: 0 };
}

export const PBSetPosition = {
  encode(message: PBSetPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBSetPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBSetPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float();
          break;
        case 2:
          message.y = reader.float();
          break;
        case 3:
          message.z = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBSetPosition {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
    };
  },

  toJSON(message: PBSetPosition): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBSetPosition>, I>>(object: I): PBSetPosition {
    const message = createBasePBSetPosition();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    return message;
  },
};

function createBasePBContentMapping(): PBContentMapping {
  return { file: "", hash: "" };
}

export const PBContentMapping = {
  encode(message: PBContentMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.file !== "") {
      writer.uint32(10).string(message.file);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBContentMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBContentMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file = reader.string();
          break;
        case 2:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBContentMapping {
    return { file: isSet(object.file) ? String(object.file) : "", hash: isSet(object.hash) ? String(object.hash) : "" };
  },

  toJSON(message: PBContentMapping): unknown {
    const obj: any = {};
    message.file !== undefined && (obj.file = message.file);
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBContentMapping>, I>>(object: I): PBContentMapping {
    const message = createBasePBContentMapping();
    message.file = object.file ?? "";
    message.hash = object.hash ?? "";
    return message;
  },
};

function createBasePBPosition(): PBPosition {
  return { x: 0, y: 0 };
}

export const PBPosition = {
  encode(message: PBPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float();
          break;
        case 2:
          message.y = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBPosition {
    return { x: isSet(object.x) ? Number(object.x) : 0, y: isSet(object.y) ? Number(object.y) : 0 };
  },

  toJSON(message: PBPosition): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBPosition>, I>>(object: I): PBPosition {
    const message = createBasePBPosition();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBasePBLoadParcelScenes(): PBLoadParcelScenes {
  return { id: "", basePosition: undefined, parcels: [], contents: [], baseUrl: "", sceneNumber: 0 };
}

export const PBLoadParcelScenes = {
  encode(message: PBLoadParcelScenes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.basePosition !== undefined) {
      PBPosition.encode(message.basePosition, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.parcels) {
      PBPosition.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.contents) {
      PBContentMapping.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.baseUrl !== "") {
      writer.uint32(42).string(message.baseUrl);
    }
    if (message.sceneNumber !== 0) {
      writer.uint32(792).int32(message.sceneNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBLoadParcelScenes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBLoadParcelScenes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.basePosition = PBPosition.decode(reader, reader.uint32());
          break;
        case 3:
          message.parcels.push(PBPosition.decode(reader, reader.uint32()));
          break;
        case 4:
          message.contents.push(PBContentMapping.decode(reader, reader.uint32()));
          break;
        case 5:
          message.baseUrl = reader.string();
          break;
        case 99:
          message.sceneNumber = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBLoadParcelScenes {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      basePosition: isSet(object.basePosition) ? PBPosition.fromJSON(object.basePosition) : undefined,
      parcels: Array.isArray(object?.parcels) ? object.parcels.map((e: any) => PBPosition.fromJSON(e)) : [],
      contents: Array.isArray(object?.contents) ? object.contents.map((e: any) => PBContentMapping.fromJSON(e)) : [],
      baseUrl: isSet(object.baseUrl) ? String(object.baseUrl) : "",
      sceneNumber: isSet(object.sceneNumber) ? Number(object.sceneNumber) : 0,
    };
  },

  toJSON(message: PBLoadParcelScenes): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.basePosition !== undefined &&
      (obj.basePosition = message.basePosition ? PBPosition.toJSON(message.basePosition) : undefined);
    if (message.parcels) {
      obj.parcels = message.parcels.map((e) => e ? PBPosition.toJSON(e) : undefined);
    } else {
      obj.parcels = [];
    }
    if (message.contents) {
      obj.contents = message.contents.map((e) => e ? PBContentMapping.toJSON(e) : undefined);
    } else {
      obj.contents = [];
    }
    message.baseUrl !== undefined && (obj.baseUrl = message.baseUrl);
    message.sceneNumber !== undefined && (obj.sceneNumber = Math.round(message.sceneNumber));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBLoadParcelScenes>, I>>(object: I): PBLoadParcelScenes {
    const message = createBasePBLoadParcelScenes();
    message.id = object.id ?? "";
    message.basePosition = (object.basePosition !== undefined && object.basePosition !== null)
      ? PBPosition.fromPartial(object.basePosition)
      : undefined;
    message.parcels = object.parcels?.map((e) => PBPosition.fromPartial(e)) || [];
    message.contents = object.contents?.map((e) => PBContentMapping.fromPartial(e)) || [];
    message.baseUrl = object.baseUrl ?? "";
    message.sceneNumber = object.sceneNumber ?? 0;
    return message;
  },
};

function createBasePBCreateUIScene(): PBCreateUIScene {
  return { id: "", baseUrl: "", sceneNumber: 0 };
}

export const PBCreateUIScene = {
  encode(message: PBCreateUIScene, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.baseUrl !== "") {
      writer.uint32(18).string(message.baseUrl);
    }
    if (message.sceneNumber !== 0) {
      writer.uint32(792).int32(message.sceneNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBCreateUIScene {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBCreateUIScene();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.baseUrl = reader.string();
          break;
        case 99:
          message.sceneNumber = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBCreateUIScene {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      baseUrl: isSet(object.baseUrl) ? String(object.baseUrl) : "",
      sceneNumber: isSet(object.sceneNumber) ? Number(object.sceneNumber) : 0,
    };
  },

  toJSON(message: PBCreateUIScene): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.baseUrl !== undefined && (obj.baseUrl = message.baseUrl);
    message.sceneNumber !== undefined && (obj.sceneNumber = Math.round(message.sceneNumber));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBCreateUIScene>, I>>(object: I): PBCreateUIScene {
    const message = createBasePBCreateUIScene();
    message.id = object.id ?? "";
    message.baseUrl = object.baseUrl ?? "";
    message.sceneNumber = object.sceneNumber ?? 0;
    return message;
  },
};

function createBasePBUnloadScene(): PBUnloadScene {
  return { sceneId: "", sceneNumber: 0 };
}

export const PBUnloadScene = {
  encode(message: PBUnloadScene, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sceneId !== "") {
      writer.uint32(10).string(message.sceneId);
    }
    if (message.sceneNumber !== 0) {
      writer.uint32(792).int32(message.sceneNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBUnloadScene {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBUnloadScene();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sceneId = reader.string();
          break;
        case 99:
          message.sceneNumber = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBUnloadScene {
    return {
      sceneId: isSet(object.sceneId) ? String(object.sceneId) : "",
      sceneNumber: isSet(object.sceneNumber) ? Number(object.sceneNumber) : 0,
    };
  },

  toJSON(message: PBUnloadScene): unknown {
    const obj: any = {};
    message.sceneId !== undefined && (obj.sceneId = message.sceneId);
    message.sceneNumber !== undefined && (obj.sceneNumber = Math.round(message.sceneNumber));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBUnloadScene>, I>>(object: I): PBUnloadScene {
    const message = createBasePBUnloadScene();
    message.sceneId = object.sceneId ?? "";
    message.sceneNumber = object.sceneNumber ?? 0;
    return message;
  },
};

function createBasePBDclMessage(): PBDclMessage {
  return {
    setDebug: undefined,
    setSceneDebugPanel: undefined,
    setEngineDebugPanel: undefined,
    sendSceneMessage: undefined,
    loadParcelScenes: undefined,
    unloadScene: undefined,
    setPosition: undefined,
    reset: undefined,
    createUIScene: undefined,
  };
}

export const PBDclMessage = {
  encode(message: PBDclMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.setDebug !== undefined) {
      Empty.encode(message.setDebug, writer.uint32(10).fork()).ldelim();
    }
    if (message.setSceneDebugPanel !== undefined) {
      Empty.encode(message.setSceneDebugPanel, writer.uint32(18).fork()).ldelim();
    }
    if (message.setEngineDebugPanel !== undefined) {
      Empty.encode(message.setEngineDebugPanel, writer.uint32(26).fork()).ldelim();
    }
    if (message.sendSceneMessage !== undefined) {
      PBSendSceneMessage.encode(message.sendSceneMessage, writer.uint32(34).fork()).ldelim();
    }
    if (message.loadParcelScenes !== undefined) {
      PBLoadParcelScenes.encode(message.loadParcelScenes, writer.uint32(42).fork()).ldelim();
    }
    if (message.unloadScene !== undefined) {
      PBUnloadScene.encode(message.unloadScene, writer.uint32(50).fork()).ldelim();
    }
    if (message.setPosition !== undefined) {
      PBSetPosition.encode(message.setPosition, writer.uint32(58).fork()).ldelim();
    }
    if (message.reset !== undefined) {
      Empty.encode(message.reset, writer.uint32(66).fork()).ldelim();
    }
    if (message.createUIScene !== undefined) {
      PBCreateUIScene.encode(message.createUIScene, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBDclMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBDclMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.setDebug = Empty.decode(reader, reader.uint32());
          break;
        case 2:
          message.setSceneDebugPanel = Empty.decode(reader, reader.uint32());
          break;
        case 3:
          message.setEngineDebugPanel = Empty.decode(reader, reader.uint32());
          break;
        case 4:
          message.sendSceneMessage = PBSendSceneMessage.decode(reader, reader.uint32());
          break;
        case 5:
          message.loadParcelScenes = PBLoadParcelScenes.decode(reader, reader.uint32());
          break;
        case 6:
          message.unloadScene = PBUnloadScene.decode(reader, reader.uint32());
          break;
        case 7:
          message.setPosition = PBSetPosition.decode(reader, reader.uint32());
          break;
        case 8:
          message.reset = Empty.decode(reader, reader.uint32());
          break;
        case 9:
          message.createUIScene = PBCreateUIScene.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBDclMessage {
    return {
      setDebug: isSet(object.setDebug) ? Empty.fromJSON(object.setDebug) : undefined,
      setSceneDebugPanel: isSet(object.setSceneDebugPanel) ? Empty.fromJSON(object.setSceneDebugPanel) : undefined,
      setEngineDebugPanel: isSet(object.setEngineDebugPanel) ? Empty.fromJSON(object.setEngineDebugPanel) : undefined,
      sendSceneMessage: isSet(object.sendSceneMessage)
        ? PBSendSceneMessage.fromJSON(object.sendSceneMessage)
        : undefined,
      loadParcelScenes: isSet(object.loadParcelScenes)
        ? PBLoadParcelScenes.fromJSON(object.loadParcelScenes)
        : undefined,
      unloadScene: isSet(object.unloadScene) ? PBUnloadScene.fromJSON(object.unloadScene) : undefined,
      setPosition: isSet(object.setPosition) ? PBSetPosition.fromJSON(object.setPosition) : undefined,
      reset: isSet(object.reset) ? Empty.fromJSON(object.reset) : undefined,
      createUIScene: isSet(object.createUIScene) ? PBCreateUIScene.fromJSON(object.createUIScene) : undefined,
    };
  },

  toJSON(message: PBDclMessage): unknown {
    const obj: any = {};
    message.setDebug !== undefined && (obj.setDebug = message.setDebug ? Empty.toJSON(message.setDebug) : undefined);
    message.setSceneDebugPanel !== undefined &&
      (obj.setSceneDebugPanel = message.setSceneDebugPanel ? Empty.toJSON(message.setSceneDebugPanel) : undefined);
    message.setEngineDebugPanel !== undefined &&
      (obj.setEngineDebugPanel = message.setEngineDebugPanel ? Empty.toJSON(message.setEngineDebugPanel) : undefined);
    message.sendSceneMessage !== undefined &&
      (obj.sendSceneMessage = message.sendSceneMessage
        ? PBSendSceneMessage.toJSON(message.sendSceneMessage)
        : undefined);
    message.loadParcelScenes !== undefined &&
      (obj.loadParcelScenes = message.loadParcelScenes
        ? PBLoadParcelScenes.toJSON(message.loadParcelScenes)
        : undefined);
    message.unloadScene !== undefined &&
      (obj.unloadScene = message.unloadScene ? PBUnloadScene.toJSON(message.unloadScene) : undefined);
    message.setPosition !== undefined &&
      (obj.setPosition = message.setPosition ? PBSetPosition.toJSON(message.setPosition) : undefined);
    message.reset !== undefined && (obj.reset = message.reset ? Empty.toJSON(message.reset) : undefined);
    message.createUIScene !== undefined &&
      (obj.createUIScene = message.createUIScene ? PBCreateUIScene.toJSON(message.createUIScene) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBDclMessage>, I>>(object: I): PBDclMessage {
    const message = createBasePBDclMessage();
    message.setDebug = (object.setDebug !== undefined && object.setDebug !== null)
      ? Empty.fromPartial(object.setDebug)
      : undefined;
    message.setSceneDebugPanel = (object.setSceneDebugPanel !== undefined && object.setSceneDebugPanel !== null)
      ? Empty.fromPartial(object.setSceneDebugPanel)
      : undefined;
    message.setEngineDebugPanel = (object.setEngineDebugPanel !== undefined && object.setEngineDebugPanel !== null)
      ? Empty.fromPartial(object.setEngineDebugPanel)
      : undefined;
    message.sendSceneMessage = (object.sendSceneMessage !== undefined && object.sendSceneMessage !== null)
      ? PBSendSceneMessage.fromPartial(object.sendSceneMessage)
      : undefined;
    message.loadParcelScenes = (object.loadParcelScenes !== undefined && object.loadParcelScenes !== null)
      ? PBLoadParcelScenes.fromPartial(object.loadParcelScenes)
      : undefined;
    message.unloadScene = (object.unloadScene !== undefined && object.unloadScene !== null)
      ? PBUnloadScene.fromPartial(object.unloadScene)
      : undefined;
    message.setPosition = (object.setPosition !== undefined && object.setPosition !== null)
      ? PBSetPosition.fromPartial(object.setPosition)
      : undefined;
    message.reset = (object.reset !== undefined && object.reset !== null) ? Empty.fromPartial(object.reset) : undefined;
    message.createUIScene = (object.createUIScene !== undefined && object.createUIScene !== null)
      ? PBCreateUIScene.fromPartial(object.createUIScene)
      : undefined;
    return message;
  },
};

function createBasePBAnimationState(): PBAnimationState {
  return { clip: "", looping: false, weight: 0, playing: false, shouldReset: false, speed: 0 };
}

export const PBAnimationState = {
  encode(message: PBAnimationState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clip !== "") {
      writer.uint32(10).string(message.clip);
    }
    if (message.looping === true) {
      writer.uint32(16).bool(message.looping);
    }
    if (message.weight !== 0) {
      writer.uint32(29).float(message.weight);
    }
    if (message.playing === true) {
      writer.uint32(32).bool(message.playing);
    }
    if (message.shouldReset === true) {
      writer.uint32(40).bool(message.shouldReset);
    }
    if (message.speed !== 0) {
      writer.uint32(53).float(message.speed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBAnimationState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBAnimationState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clip = reader.string();
          break;
        case 2:
          message.looping = reader.bool();
          break;
        case 3:
          message.weight = reader.float();
          break;
        case 4:
          message.playing = reader.bool();
          break;
        case 5:
          message.shouldReset = reader.bool();
          break;
        case 6:
          message.speed = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBAnimationState {
    return {
      clip: isSet(object.clip) ? String(object.clip) : "",
      looping: isSet(object.looping) ? Boolean(object.looping) : false,
      weight: isSet(object.weight) ? Number(object.weight) : 0,
      playing: isSet(object.playing) ? Boolean(object.playing) : false,
      shouldReset: isSet(object.shouldReset) ? Boolean(object.shouldReset) : false,
      speed: isSet(object.speed) ? Number(object.speed) : 0,
    };
  },

  toJSON(message: PBAnimationState): unknown {
    const obj: any = {};
    message.clip !== undefined && (obj.clip = message.clip);
    message.looping !== undefined && (obj.looping = message.looping);
    message.weight !== undefined && (obj.weight = message.weight);
    message.playing !== undefined && (obj.playing = message.playing);
    message.shouldReset !== undefined && (obj.shouldReset = message.shouldReset);
    message.speed !== undefined && (obj.speed = message.speed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBAnimationState>, I>>(object: I): PBAnimationState {
    const message = createBasePBAnimationState();
    message.clip = object.clip ?? "";
    message.looping = object.looping ?? false;
    message.weight = object.weight ?? 0;
    message.playing = object.playing ?? false;
    message.shouldReset = object.shouldReset ?? false;
    message.speed = object.speed ?? 0;
    return message;
  },
};

function createBasePBAnimator(): PBAnimator {
  return { withCollisions: false, visible: false };
}

export const PBAnimator = {
  encode(message: PBAnimator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withCollisions === true) {
      writer.uint32(8).bool(message.withCollisions);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBAnimator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBAnimator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withCollisions = reader.bool();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBAnimator {
    return {
      withCollisions: isSet(object.withCollisions) ? Boolean(object.withCollisions) : false,
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
    };
  },

  toJSON(message: PBAnimator): unknown {
    const obj: any = {};
    message.withCollisions !== undefined && (obj.withCollisions = message.withCollisions);
    message.visible !== undefined && (obj.visible = message.visible);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBAnimator>, I>>(object: I): PBAnimator {
    const message = createBasePBAnimator();
    message.withCollisions = object.withCollisions ?? false;
    message.visible = object.visible ?? false;
    return message;
  },
};

function createBasePBAudioClip(): PBAudioClip {
  return { url: "", loop: false, volume: 0 };
}

export const PBAudioClip = {
  encode(message: PBAudioClip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.loop === true) {
      writer.uint32(16).bool(message.loop);
    }
    if (message.volume !== 0) {
      writer.uint32(29).float(message.volume);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBAudioClip {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBAudioClip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.loop = reader.bool();
          break;
        case 3:
          message.volume = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBAudioClip {
    return {
      url: isSet(object.url) ? String(object.url) : "",
      loop: isSet(object.loop) ? Boolean(object.loop) : false,
      volume: isSet(object.volume) ? Number(object.volume) : 0,
    };
  },

  toJSON(message: PBAudioClip): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.loop !== undefined && (obj.loop = message.loop);
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBAudioClip>, I>>(object: I): PBAudioClip {
    const message = createBasePBAudioClip();
    message.url = object.url ?? "";
    message.loop = object.loop ?? false;
    message.volume = object.volume ?? 0;
    return message;
  },
};

function createBasePBAudioSource(): PBAudioSource {
  return { audioClip: undefined, audioClipId: "", loop: false, volume: 0, playing: false, pitch: 0 };
}

export const PBAudioSource = {
  encode(message: PBAudioSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.audioClip !== undefined) {
      PBAudioClip.encode(message.audioClip, writer.uint32(10).fork()).ldelim();
    }
    if (message.audioClipId !== "") {
      writer.uint32(18).string(message.audioClipId);
    }
    if (message.loop === true) {
      writer.uint32(24).bool(message.loop);
    }
    if (message.volume !== 0) {
      writer.uint32(37).float(message.volume);
    }
    if (message.playing === true) {
      writer.uint32(40).bool(message.playing);
    }
    if (message.pitch !== 0) {
      writer.uint32(53).float(message.pitch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBAudioSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBAudioSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.audioClip = PBAudioClip.decode(reader, reader.uint32());
          break;
        case 2:
          message.audioClipId = reader.string();
          break;
        case 3:
          message.loop = reader.bool();
          break;
        case 4:
          message.volume = reader.float();
          break;
        case 5:
          message.playing = reader.bool();
          break;
        case 6:
          message.pitch = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBAudioSource {
    return {
      audioClip: isSet(object.audioClip) ? PBAudioClip.fromJSON(object.audioClip) : undefined,
      audioClipId: isSet(object.audioClipId) ? String(object.audioClipId) : "",
      loop: isSet(object.loop) ? Boolean(object.loop) : false,
      volume: isSet(object.volume) ? Number(object.volume) : 0,
      playing: isSet(object.playing) ? Boolean(object.playing) : false,
      pitch: isSet(object.pitch) ? Number(object.pitch) : 0,
    };
  },

  toJSON(message: PBAudioSource): unknown {
    const obj: any = {};
    message.audioClip !== undefined &&
      (obj.audioClip = message.audioClip ? PBAudioClip.toJSON(message.audioClip) : undefined);
    message.audioClipId !== undefined && (obj.audioClipId = message.audioClipId);
    message.loop !== undefined && (obj.loop = message.loop);
    message.volume !== undefined && (obj.volume = message.volume);
    message.playing !== undefined && (obj.playing = message.playing);
    message.pitch !== undefined && (obj.pitch = message.pitch);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBAudioSource>, I>>(object: I): PBAudioSource {
    const message = createBasePBAudioSource();
    message.audioClip = (object.audioClip !== undefined && object.audioClip !== null)
      ? PBAudioClip.fromPartial(object.audioClip)
      : undefined;
    message.audioClipId = object.audioClipId ?? "";
    message.loop = object.loop ?? false;
    message.volume = object.volume ?? 0;
    message.playing = object.playing ?? false;
    message.pitch = object.pitch ?? 0;
    return message;
  },
};

function createBasePBAvatarShape(): PBAvatarShape {
  return {
    id: "",
    baseUrl: "",
    name: "",
    bodyShape: undefined,
    wearables: [],
    skin: undefined,
    hair: undefined,
    eyes: undefined,
    eyebrows: undefined,
    mouth: undefined,
    useDummyModel: false,
    expressionTriggerId: "",
    expressionTriggerTimestamp: 0,
    emotes: [],
  };
}

export const PBAvatarShape = {
  encode(message: PBAvatarShape, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.baseUrl !== "") {
      writer.uint32(18).string(message.baseUrl);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.bodyShape !== undefined) {
      PBWearable.encode(message.bodyShape, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.wearables) {
      PBWearable.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.skin !== undefined) {
      PBSkin.encode(message.skin, writer.uint32(50).fork()).ldelim();
    }
    if (message.hair !== undefined) {
      PBHair.encode(message.hair, writer.uint32(58).fork()).ldelim();
    }
    if (message.eyes !== undefined) {
      PBEyes.encode(message.eyes, writer.uint32(66).fork()).ldelim();
    }
    if (message.eyebrows !== undefined) {
      PBFace.encode(message.eyebrows, writer.uint32(74).fork()).ldelim();
    }
    if (message.mouth !== undefined) {
      PBFace.encode(message.mouth, writer.uint32(82).fork()).ldelim();
    }
    if (message.useDummyModel === true) {
      writer.uint32(88).bool(message.useDummyModel);
    }
    if (message.expressionTriggerId !== "") {
      writer.uint32(98).string(message.expressionTriggerId);
    }
    if (message.expressionTriggerTimestamp !== 0) {
      writer.uint32(112).uint64(message.expressionTriggerTimestamp);
    }
    for (const v of message.emotes) {
      writer.uint32(122).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBAvatarShape {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBAvatarShape();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.baseUrl = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.bodyShape = PBWearable.decode(reader, reader.uint32());
          break;
        case 5:
          message.wearables.push(PBWearable.decode(reader, reader.uint32()));
          break;
        case 6:
          message.skin = PBSkin.decode(reader, reader.uint32());
          break;
        case 7:
          message.hair = PBHair.decode(reader, reader.uint32());
          break;
        case 8:
          message.eyes = PBEyes.decode(reader, reader.uint32());
          break;
        case 9:
          message.eyebrows = PBFace.decode(reader, reader.uint32());
          break;
        case 10:
          message.mouth = PBFace.decode(reader, reader.uint32());
          break;
        case 11:
          message.useDummyModel = reader.bool();
          break;
        case 12:
          message.expressionTriggerId = reader.string();
          break;
        case 14:
          message.expressionTriggerTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 15:
          message.emotes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBAvatarShape {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      baseUrl: isSet(object.baseUrl) ? String(object.baseUrl) : "",
      name: isSet(object.name) ? String(object.name) : "",
      bodyShape: isSet(object.bodyShape) ? PBWearable.fromJSON(object.bodyShape) : undefined,
      wearables: Array.isArray(object?.wearables) ? object.wearables.map((e: any) => PBWearable.fromJSON(e)) : [],
      skin: isSet(object.skin) ? PBSkin.fromJSON(object.skin) : undefined,
      hair: isSet(object.hair) ? PBHair.fromJSON(object.hair) : undefined,
      eyes: isSet(object.eyes) ? PBEyes.fromJSON(object.eyes) : undefined,
      eyebrows: isSet(object.eyebrows) ? PBFace.fromJSON(object.eyebrows) : undefined,
      mouth: isSet(object.mouth) ? PBFace.fromJSON(object.mouth) : undefined,
      useDummyModel: isSet(object.useDummyModel) ? Boolean(object.useDummyModel) : false,
      expressionTriggerId: isSet(object.expressionTriggerId) ? String(object.expressionTriggerId) : "",
      expressionTriggerTimestamp: isSet(object.expressionTriggerTimestamp)
        ? Number(object.expressionTriggerTimestamp)
        : 0,
      emotes: Array.isArray(object?.emotes) ? object.emotes.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: PBAvatarShape): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.baseUrl !== undefined && (obj.baseUrl = message.baseUrl);
    message.name !== undefined && (obj.name = message.name);
    message.bodyShape !== undefined &&
      (obj.bodyShape = message.bodyShape ? PBWearable.toJSON(message.bodyShape) : undefined);
    if (message.wearables) {
      obj.wearables = message.wearables.map((e) => e ? PBWearable.toJSON(e) : undefined);
    } else {
      obj.wearables = [];
    }
    message.skin !== undefined && (obj.skin = message.skin ? PBSkin.toJSON(message.skin) : undefined);
    message.hair !== undefined && (obj.hair = message.hair ? PBHair.toJSON(message.hair) : undefined);
    message.eyes !== undefined && (obj.eyes = message.eyes ? PBEyes.toJSON(message.eyes) : undefined);
    message.eyebrows !== undefined && (obj.eyebrows = message.eyebrows ? PBFace.toJSON(message.eyebrows) : undefined);
    message.mouth !== undefined && (obj.mouth = message.mouth ? PBFace.toJSON(message.mouth) : undefined);
    message.useDummyModel !== undefined && (obj.useDummyModel = message.useDummyModel);
    message.expressionTriggerId !== undefined && (obj.expressionTriggerId = message.expressionTriggerId);
    message.expressionTriggerTimestamp !== undefined &&
      (obj.expressionTriggerTimestamp = Math.round(message.expressionTriggerTimestamp));
    if (message.emotes) {
      obj.emotes = message.emotes.map((e) => e);
    } else {
      obj.emotes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBAvatarShape>, I>>(object: I): PBAvatarShape {
    const message = createBasePBAvatarShape();
    message.id = object.id ?? "";
    message.baseUrl = object.baseUrl ?? "";
    message.name = object.name ?? "";
    message.bodyShape = (object.bodyShape !== undefined && object.bodyShape !== null)
      ? PBWearable.fromPartial(object.bodyShape)
      : undefined;
    message.wearables = object.wearables?.map((e) => PBWearable.fromPartial(e)) || [];
    message.skin = (object.skin !== undefined && object.skin !== null) ? PBSkin.fromPartial(object.skin) : undefined;
    message.hair = (object.hair !== undefined && object.hair !== null) ? PBHair.fromPartial(object.hair) : undefined;
    message.eyes = (object.eyes !== undefined && object.eyes !== null) ? PBEyes.fromPartial(object.eyes) : undefined;
    message.eyebrows = (object.eyebrows !== undefined && object.eyebrows !== null)
      ? PBFace.fromPartial(object.eyebrows)
      : undefined;
    message.mouth = (object.mouth !== undefined && object.mouth !== null)
      ? PBFace.fromPartial(object.mouth)
      : undefined;
    message.useDummyModel = object.useDummyModel ?? false;
    message.expressionTriggerId = object.expressionTriggerId ?? "";
    message.expressionTriggerTimestamp = object.expressionTriggerTimestamp ?? 0;
    message.emotes = object.emotes?.map((e) => e) || [];
    return message;
  },
};

function createBasePBWearable(): PBWearable {
  return { categody: "", contentName: "", contents: [] };
}

export const PBWearable = {
  encode(message: PBWearable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.categody !== "") {
      writer.uint32(10).string(message.categody);
    }
    if (message.contentName !== "") {
      writer.uint32(18).string(message.contentName);
    }
    for (const v of message.contents) {
      PBContentMapping.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBWearable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBWearable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categody = reader.string();
          break;
        case 2:
          message.contentName = reader.string();
          break;
        case 3:
          message.contents.push(PBContentMapping.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBWearable {
    return {
      categody: isSet(object.categody) ? String(object.categody) : "",
      contentName: isSet(object.contentName) ? String(object.contentName) : "",
      contents: Array.isArray(object?.contents) ? object.contents.map((e: any) => PBContentMapping.fromJSON(e)) : [],
    };
  },

  toJSON(message: PBWearable): unknown {
    const obj: any = {};
    message.categody !== undefined && (obj.categody = message.categody);
    message.contentName !== undefined && (obj.contentName = message.contentName);
    if (message.contents) {
      obj.contents = message.contents.map((e) => e ? PBContentMapping.toJSON(e) : undefined);
    } else {
      obj.contents = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBWearable>, I>>(object: I): PBWearable {
    const message = createBasePBWearable();
    message.categody = object.categody ?? "";
    message.contentName = object.contentName ?? "";
    message.contents = object.contents?.map((e) => PBContentMapping.fromPartial(e)) || [];
    return message;
  },
};

function createBasePBFace(): PBFace {
  return { texture: "" };
}

export const PBFace = {
  encode(message: PBFace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.texture !== "") {
      writer.uint32(10).string(message.texture);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBFace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBFace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.texture = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBFace {
    return { texture: isSet(object.texture) ? String(object.texture) : "" };
  },

  toJSON(message: PBFace): unknown {
    const obj: any = {};
    message.texture !== undefined && (obj.texture = message.texture);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBFace>, I>>(object: I): PBFace {
    const message = createBasePBFace();
    message.texture = object.texture ?? "";
    return message;
  },
};

function createBasePBEyes(): PBEyes {
  return { texture: "", mask: "", color: undefined };
}

export const PBEyes = {
  encode(message: PBEyes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.texture !== "") {
      writer.uint32(10).string(message.texture);
    }
    if (message.mask !== "") {
      writer.uint32(18).string(message.mask);
    }
    if (message.color !== undefined) {
      PBColor4.encode(message.color, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBEyes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBEyes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.texture = reader.string();
          break;
        case 2:
          message.mask = reader.string();
          break;
        case 3:
          message.color = PBColor4.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBEyes {
    return {
      texture: isSet(object.texture) ? String(object.texture) : "",
      mask: isSet(object.mask) ? String(object.mask) : "",
      color: isSet(object.color) ? PBColor4.fromJSON(object.color) : undefined,
    };
  },

  toJSON(message: PBEyes): unknown {
    const obj: any = {};
    message.texture !== undefined && (obj.texture = message.texture);
    message.mask !== undefined && (obj.mask = message.mask);
    message.color !== undefined && (obj.color = message.color ? PBColor4.toJSON(message.color) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBEyes>, I>>(object: I): PBEyes {
    const message = createBasePBEyes();
    message.texture = object.texture ?? "";
    message.mask = object.mask ?? "";
    message.color = (object.color !== undefined && object.color !== null)
      ? PBColor4.fromPartial(object.color)
      : undefined;
    return message;
  },
};

function createBasePBHair(): PBHair {
  return { color: undefined };
}

export const PBHair = {
  encode(message: PBHair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.color !== undefined) {
      PBColor4.encode(message.color, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBHair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBHair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.color = PBColor4.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBHair {
    return { color: isSet(object.color) ? PBColor4.fromJSON(object.color) : undefined };
  },

  toJSON(message: PBHair): unknown {
    const obj: any = {};
    message.color !== undefined && (obj.color = message.color ? PBColor4.toJSON(message.color) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBHair>, I>>(object: I): PBHair {
    const message = createBasePBHair();
    message.color = (object.color !== undefined && object.color !== null)
      ? PBColor4.fromPartial(object.color)
      : undefined;
    return message;
  },
};

function createBasePBSkin(): PBSkin {
  return { color: undefined };
}

export const PBSkin = {
  encode(message: PBSkin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.color !== undefined) {
      PBColor4.encode(message.color, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBSkin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBSkin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.color = PBColor4.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBSkin {
    return { color: isSet(object.color) ? PBColor4.fromJSON(object.color) : undefined };
  },

  toJSON(message: PBSkin): unknown {
    const obj: any = {};
    message.color !== undefined && (obj.color = message.color ? PBColor4.toJSON(message.color) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBSkin>, I>>(object: I): PBSkin {
    const message = createBasePBSkin();
    message.color = (object.color !== undefined && object.color !== null)
      ? PBColor4.fromPartial(object.color)
      : undefined;
    return message;
  },
};

function createBasePBBasicMaterial(): PBBasicMaterial {
  return { texture: undefined, alphaTest: 0 };
}

export const PBBasicMaterial = {
  encode(message: PBBasicMaterial, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.texture !== undefined) {
      PBTexture.encode(message.texture, writer.uint32(10).fork()).ldelim();
    }
    if (message.alphaTest !== 0) {
      writer.uint32(21).float(message.alphaTest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBBasicMaterial {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBBasicMaterial();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.texture = PBTexture.decode(reader, reader.uint32());
          break;
        case 2:
          message.alphaTest = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBBasicMaterial {
    return {
      texture: isSet(object.texture) ? PBTexture.fromJSON(object.texture) : undefined,
      alphaTest: isSet(object.alphaTest) ? Number(object.alphaTest) : 0,
    };
  },

  toJSON(message: PBBasicMaterial): unknown {
    const obj: any = {};
    message.texture !== undefined && (obj.texture = message.texture ? PBTexture.toJSON(message.texture) : undefined);
    message.alphaTest !== undefined && (obj.alphaTest = message.alphaTest);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBBasicMaterial>, I>>(object: I): PBBasicMaterial {
    const message = createBasePBBasicMaterial();
    message.texture = (object.texture !== undefined && object.texture !== null)
      ? PBTexture.fromPartial(object.texture)
      : undefined;
    message.alphaTest = object.alphaTest ?? 0;
    return message;
  },
};

function createBasePBBillboard(): PBBillboard {
  return { x: false, y: false, z: false };
}

export const PBBillboard = {
  encode(message: PBBillboard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x === true) {
      writer.uint32(8).bool(message.x);
    }
    if (message.y === true) {
      writer.uint32(16).bool(message.y);
    }
    if (message.z === true) {
      writer.uint32(24).bool(message.z);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBBillboard {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBBillboard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.bool();
          break;
        case 2:
          message.y = reader.bool();
          break;
        case 3:
          message.z = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBBillboard {
    return {
      x: isSet(object.x) ? Boolean(object.x) : false,
      y: isSet(object.y) ? Boolean(object.y) : false,
      z: isSet(object.z) ? Boolean(object.z) : false,
    };
  },

  toJSON(message: PBBillboard): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBBillboard>, I>>(object: I): PBBillboard {
    const message = createBasePBBillboard();
    message.x = object.x ?? false;
    message.y = object.y ?? false;
    message.z = object.z ?? false;
    return message;
  },
};

function createBasePBBoxShape(): PBBoxShape {
  return { withCollisions: false, visible: false, uvs: [] };
}

export const PBBoxShape = {
  encode(message: PBBoxShape, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withCollisions === true) {
      writer.uint32(8).bool(message.withCollisions);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    writer.uint32(26).fork();
    for (const v of message.uvs) {
      writer.float(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBBoxShape {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBBoxShape();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withCollisions = reader.bool();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.uvs.push(reader.float());
            }
          } else {
            message.uvs.push(reader.float());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBBoxShape {
    return {
      withCollisions: isSet(object.withCollisions) ? Boolean(object.withCollisions) : false,
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      uvs: Array.isArray(object?.uvs) ? object.uvs.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: PBBoxShape): unknown {
    const obj: any = {};
    message.withCollisions !== undefined && (obj.withCollisions = message.withCollisions);
    message.visible !== undefined && (obj.visible = message.visible);
    if (message.uvs) {
      obj.uvs = message.uvs.map((e) => e);
    } else {
      obj.uvs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBBoxShape>, I>>(object: I): PBBoxShape {
    const message = createBasePBBoxShape();
    message.withCollisions = object.withCollisions ?? false;
    message.visible = object.visible ?? false;
    message.uvs = object.uvs?.map((e) => e) || [];
    return message;
  },
};

function createBasePBCircleShape(): PBCircleShape {
  return { withCollisions: false, visible: false, segments: 0, arc: 0 };
}

export const PBCircleShape = {
  encode(message: PBCircleShape, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withCollisions === true) {
      writer.uint32(8).bool(message.withCollisions);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    if (message.segments !== 0) {
      writer.uint32(29).float(message.segments);
    }
    if (message.arc !== 0) {
      writer.uint32(37).float(message.arc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBCircleShape {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBCircleShape();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withCollisions = reader.bool();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        case 3:
          message.segments = reader.float();
          break;
        case 4:
          message.arc = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBCircleShape {
    return {
      withCollisions: isSet(object.withCollisions) ? Boolean(object.withCollisions) : false,
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      segments: isSet(object.segments) ? Number(object.segments) : 0,
      arc: isSet(object.arc) ? Number(object.arc) : 0,
    };
  },

  toJSON(message: PBCircleShape): unknown {
    const obj: any = {};
    message.withCollisions !== undefined && (obj.withCollisions = message.withCollisions);
    message.visible !== undefined && (obj.visible = message.visible);
    message.segments !== undefined && (obj.segments = message.segments);
    message.arc !== undefined && (obj.arc = message.arc);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBCircleShape>, I>>(object: I): PBCircleShape {
    const message = createBasePBCircleShape();
    message.withCollisions = object.withCollisions ?? false;
    message.visible = object.visible ?? false;
    message.segments = object.segments ?? 0;
    message.arc = object.arc ?? 0;
    return message;
  },
};

function createBasePBConeShape(): PBConeShape {
  return {
    withCollisions: false,
    visible: false,
    radiusTop: 0,
    radiusBottom: 0,
    segmentsHeight: 0,
    segmentsRadial: 0,
    openEnded: false,
    radius: 0,
    arc: 0,
  };
}

export const PBConeShape = {
  encode(message: PBConeShape, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withCollisions === true) {
      writer.uint32(8).bool(message.withCollisions);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    if (message.radiusTop !== 0) {
      writer.uint32(29).float(message.radiusTop);
    }
    if (message.radiusBottom !== 0) {
      writer.uint32(37).float(message.radiusBottom);
    }
    if (message.segmentsHeight !== 0) {
      writer.uint32(45).float(message.segmentsHeight);
    }
    if (message.segmentsRadial !== 0) {
      writer.uint32(53).float(message.segmentsRadial);
    }
    if (message.openEnded === true) {
      writer.uint32(56).bool(message.openEnded);
    }
    if (message.radius !== 0) {
      writer.uint32(69).float(message.radius);
    }
    if (message.arc !== 0) {
      writer.uint32(77).float(message.arc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBConeShape {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBConeShape();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withCollisions = reader.bool();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        case 3:
          message.radiusTop = reader.float();
          break;
        case 4:
          message.radiusBottom = reader.float();
          break;
        case 5:
          message.segmentsHeight = reader.float();
          break;
        case 6:
          message.segmentsRadial = reader.float();
          break;
        case 7:
          message.openEnded = reader.bool();
          break;
        case 8:
          message.radius = reader.float();
          break;
        case 9:
          message.arc = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBConeShape {
    return {
      withCollisions: isSet(object.withCollisions) ? Boolean(object.withCollisions) : false,
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      radiusTop: isSet(object.radiusTop) ? Number(object.radiusTop) : 0,
      radiusBottom: isSet(object.radiusBottom) ? Number(object.radiusBottom) : 0,
      segmentsHeight: isSet(object.segmentsHeight) ? Number(object.segmentsHeight) : 0,
      segmentsRadial: isSet(object.segmentsRadial) ? Number(object.segmentsRadial) : 0,
      openEnded: isSet(object.openEnded) ? Boolean(object.openEnded) : false,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
      arc: isSet(object.arc) ? Number(object.arc) : 0,
    };
  },

  toJSON(message: PBConeShape): unknown {
    const obj: any = {};
    message.withCollisions !== undefined && (obj.withCollisions = message.withCollisions);
    message.visible !== undefined && (obj.visible = message.visible);
    message.radiusTop !== undefined && (obj.radiusTop = message.radiusTop);
    message.radiusBottom !== undefined && (obj.radiusBottom = message.radiusBottom);
    message.segmentsHeight !== undefined && (obj.segmentsHeight = message.segmentsHeight);
    message.segmentsRadial !== undefined && (obj.segmentsRadial = message.segmentsRadial);
    message.openEnded !== undefined && (obj.openEnded = message.openEnded);
    message.radius !== undefined && (obj.radius = message.radius);
    message.arc !== undefined && (obj.arc = message.arc);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBConeShape>, I>>(object: I): PBConeShape {
    const message = createBasePBConeShape();
    message.withCollisions = object.withCollisions ?? false;
    message.visible = object.visible ?? false;
    message.radiusTop = object.radiusTop ?? 0;
    message.radiusBottom = object.radiusBottom ?? 0;
    message.segmentsHeight = object.segmentsHeight ?? 0;
    message.segmentsRadial = object.segmentsRadial ?? 0;
    message.openEnded = object.openEnded ?? false;
    message.radius = object.radius ?? 0;
    message.arc = object.arc ?? 0;
    return message;
  },
};

function createBasePBCylinderShape(): PBCylinderShape {
  return {
    withCollisions: false,
    visible: false,
    radiusTop: 0,
    radiusBottom: 0,
    segmentsHeight: 0,
    segmentsRadial: 0,
    openEnded: false,
    radius: 0,
    arc: 0,
  };
}

export const PBCylinderShape = {
  encode(message: PBCylinderShape, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withCollisions === true) {
      writer.uint32(8).bool(message.withCollisions);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    if (message.radiusTop !== 0) {
      writer.uint32(29).float(message.radiusTop);
    }
    if (message.radiusBottom !== 0) {
      writer.uint32(37).float(message.radiusBottom);
    }
    if (message.segmentsHeight !== 0) {
      writer.uint32(45).float(message.segmentsHeight);
    }
    if (message.segmentsRadial !== 0) {
      writer.uint32(53).float(message.segmentsRadial);
    }
    if (message.openEnded === true) {
      writer.uint32(56).bool(message.openEnded);
    }
    if (message.radius !== 0) {
      writer.uint32(69).float(message.radius);
    }
    if (message.arc !== 0) {
      writer.uint32(77).float(message.arc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBCylinderShape {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBCylinderShape();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withCollisions = reader.bool();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        case 3:
          message.radiusTop = reader.float();
          break;
        case 4:
          message.radiusBottom = reader.float();
          break;
        case 5:
          message.segmentsHeight = reader.float();
          break;
        case 6:
          message.segmentsRadial = reader.float();
          break;
        case 7:
          message.openEnded = reader.bool();
          break;
        case 8:
          message.radius = reader.float();
          break;
        case 9:
          message.arc = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBCylinderShape {
    return {
      withCollisions: isSet(object.withCollisions) ? Boolean(object.withCollisions) : false,
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      radiusTop: isSet(object.radiusTop) ? Number(object.radiusTop) : 0,
      radiusBottom: isSet(object.radiusBottom) ? Number(object.radiusBottom) : 0,
      segmentsHeight: isSet(object.segmentsHeight) ? Number(object.segmentsHeight) : 0,
      segmentsRadial: isSet(object.segmentsRadial) ? Number(object.segmentsRadial) : 0,
      openEnded: isSet(object.openEnded) ? Boolean(object.openEnded) : false,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
      arc: isSet(object.arc) ? Number(object.arc) : 0,
    };
  },

  toJSON(message: PBCylinderShape): unknown {
    const obj: any = {};
    message.withCollisions !== undefined && (obj.withCollisions = message.withCollisions);
    message.visible !== undefined && (obj.visible = message.visible);
    message.radiusTop !== undefined && (obj.radiusTop = message.radiusTop);
    message.radiusBottom !== undefined && (obj.radiusBottom = message.radiusBottom);
    message.segmentsHeight !== undefined && (obj.segmentsHeight = message.segmentsHeight);
    message.segmentsRadial !== undefined && (obj.segmentsRadial = message.segmentsRadial);
    message.openEnded !== undefined && (obj.openEnded = message.openEnded);
    message.radius !== undefined && (obj.radius = message.radius);
    message.arc !== undefined && (obj.arc = message.arc);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBCylinderShape>, I>>(object: I): PBCylinderShape {
    const message = createBasePBCylinderShape();
    message.withCollisions = object.withCollisions ?? false;
    message.visible = object.visible ?? false;
    message.radiusTop = object.radiusTop ?? 0;
    message.radiusBottom = object.radiusBottom ?? 0;
    message.segmentsHeight = object.segmentsHeight ?? 0;
    message.segmentsRadial = object.segmentsRadial ?? 0;
    message.openEnded = object.openEnded ?? false;
    message.radius = object.radius ?? 0;
    message.arc = object.arc ?? 0;
    return message;
  },
};

function createBasePBGlobalPointerDown(): PBGlobalPointerDown {
  return {};
}

export const PBGlobalPointerDown = {
  encode(_: PBGlobalPointerDown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBGlobalPointerDown {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBGlobalPointerDown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): PBGlobalPointerDown {
    return {};
  },

  toJSON(_: PBGlobalPointerDown): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBGlobalPointerDown>, I>>(_: I): PBGlobalPointerDown {
    const message = createBasePBGlobalPointerDown();
    return message;
  },
};

function createBasePBGlobalPointerUp(): PBGlobalPointerUp {
  return {};
}

export const PBGlobalPointerUp = {
  encode(_: PBGlobalPointerUp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBGlobalPointerUp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBGlobalPointerUp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): PBGlobalPointerUp {
    return {};
  },

  toJSON(_: PBGlobalPointerUp): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBGlobalPointerUp>, I>>(_: I): PBGlobalPointerUp {
    const message = createBasePBGlobalPointerUp();
    return message;
  },
};

function createBasePBGLTFShape(): PBGLTFShape {
  return { withCollisions: false, visible: false, src: "" };
}

export const PBGLTFShape = {
  encode(message: PBGLTFShape, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withCollisions === true) {
      writer.uint32(8).bool(message.withCollisions);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    if (message.src !== "") {
      writer.uint32(26).string(message.src);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBGLTFShape {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBGLTFShape();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withCollisions = reader.bool();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        case 3:
          message.src = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBGLTFShape {
    return {
      withCollisions: isSet(object.withCollisions) ? Boolean(object.withCollisions) : false,
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      src: isSet(object.src) ? String(object.src) : "",
    };
  },

  toJSON(message: PBGLTFShape): unknown {
    const obj: any = {};
    message.withCollisions !== undefined && (obj.withCollisions = message.withCollisions);
    message.visible !== undefined && (obj.visible = message.visible);
    message.src !== undefined && (obj.src = message.src);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBGLTFShape>, I>>(object: I): PBGLTFShape {
    const message = createBasePBGLTFShape();
    message.withCollisions = object.withCollisions ?? false;
    message.visible = object.visible ?? false;
    message.src = object.src ?? "";
    return message;
  },
};

function createBasePBMaterial(): PBMaterial {
  return {
    alpha: 0,
    albedoColor: undefined,
    emissiveColor: undefined,
    metallic: 0,
    roughness: 0,
    ambientColor: undefined,
    reflectionColor: undefined,
    reflectivityColor: undefined,
    directIntensity: 0,
    microSurface: 0,
    emissiveIntensity: 0,
    environmentIntensity: 0,
    specularIntensity: 0,
    albedoTexture: undefined,
    alphaTexture: undefined,
    emissiveTexture: undefined,
    bumpTexture: undefined,
    refractionTexture: undefined,
    disableLighting: false,
    transparencyMode: 0,
    hasAlpha: false,
  };
}

export const PBMaterial = {
  encode(message: PBMaterial, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alpha !== 0) {
      writer.uint32(13).float(message.alpha);
    }
    if (message.albedoColor !== undefined) {
      PBColor3.encode(message.albedoColor, writer.uint32(18).fork()).ldelim();
    }
    if (message.emissiveColor !== undefined) {
      PBColor3.encode(message.emissiveColor, writer.uint32(26).fork()).ldelim();
    }
    if (message.metallic !== 0) {
      writer.uint32(37).float(message.metallic);
    }
    if (message.roughness !== 0) {
      writer.uint32(45).float(message.roughness);
    }
    if (message.ambientColor !== undefined) {
      PBColor3.encode(message.ambientColor, writer.uint32(50).fork()).ldelim();
    }
    if (message.reflectionColor !== undefined) {
      PBColor3.encode(message.reflectionColor, writer.uint32(58).fork()).ldelim();
    }
    if (message.reflectivityColor !== undefined) {
      PBColor3.encode(message.reflectivityColor, writer.uint32(66).fork()).ldelim();
    }
    if (message.directIntensity !== 0) {
      writer.uint32(77).float(message.directIntensity);
    }
    if (message.microSurface !== 0) {
      writer.uint32(85).float(message.microSurface);
    }
    if (message.emissiveIntensity !== 0) {
      writer.uint32(93).float(message.emissiveIntensity);
    }
    if (message.environmentIntensity !== 0) {
      writer.uint32(101).float(message.environmentIntensity);
    }
    if (message.specularIntensity !== 0) {
      writer.uint32(109).float(message.specularIntensity);
    }
    if (message.albedoTexture !== undefined) {
      PBTexture.encode(message.albedoTexture, writer.uint32(114).fork()).ldelim();
    }
    if (message.alphaTexture !== undefined) {
      PBTexture.encode(message.alphaTexture, writer.uint32(122).fork()).ldelim();
    }
    if (message.emissiveTexture !== undefined) {
      PBTexture.encode(message.emissiveTexture, writer.uint32(130).fork()).ldelim();
    }
    if (message.bumpTexture !== undefined) {
      PBTexture.encode(message.bumpTexture, writer.uint32(138).fork()).ldelim();
    }
    if (message.refractionTexture !== undefined) {
      PBTexture.encode(message.refractionTexture, writer.uint32(146).fork()).ldelim();
    }
    if (message.disableLighting === true) {
      writer.uint32(152).bool(message.disableLighting);
    }
    if (message.transparencyMode !== 0) {
      writer.uint32(165).float(message.transparencyMode);
    }
    if (message.hasAlpha === true) {
      writer.uint32(168).bool(message.hasAlpha);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBMaterial {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBMaterial();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alpha = reader.float();
          break;
        case 2:
          message.albedoColor = PBColor3.decode(reader, reader.uint32());
          break;
        case 3:
          message.emissiveColor = PBColor3.decode(reader, reader.uint32());
          break;
        case 4:
          message.metallic = reader.float();
          break;
        case 5:
          message.roughness = reader.float();
          break;
        case 6:
          message.ambientColor = PBColor3.decode(reader, reader.uint32());
          break;
        case 7:
          message.reflectionColor = PBColor3.decode(reader, reader.uint32());
          break;
        case 8:
          message.reflectivityColor = PBColor3.decode(reader, reader.uint32());
          break;
        case 9:
          message.directIntensity = reader.float();
          break;
        case 10:
          message.microSurface = reader.float();
          break;
        case 11:
          message.emissiveIntensity = reader.float();
          break;
        case 12:
          message.environmentIntensity = reader.float();
          break;
        case 13:
          message.specularIntensity = reader.float();
          break;
        case 14:
          message.albedoTexture = PBTexture.decode(reader, reader.uint32());
          break;
        case 15:
          message.alphaTexture = PBTexture.decode(reader, reader.uint32());
          break;
        case 16:
          message.emissiveTexture = PBTexture.decode(reader, reader.uint32());
          break;
        case 17:
          message.bumpTexture = PBTexture.decode(reader, reader.uint32());
          break;
        case 18:
          message.refractionTexture = PBTexture.decode(reader, reader.uint32());
          break;
        case 19:
          message.disableLighting = reader.bool();
          break;
        case 20:
          message.transparencyMode = reader.float();
          break;
        case 21:
          message.hasAlpha = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBMaterial {
    return {
      alpha: isSet(object.alpha) ? Number(object.alpha) : 0,
      albedoColor: isSet(object.albedoColor) ? PBColor3.fromJSON(object.albedoColor) : undefined,
      emissiveColor: isSet(object.emissiveColor) ? PBColor3.fromJSON(object.emissiveColor) : undefined,
      metallic: isSet(object.metallic) ? Number(object.metallic) : 0,
      roughness: isSet(object.roughness) ? Number(object.roughness) : 0,
      ambientColor: isSet(object.ambientColor) ? PBColor3.fromJSON(object.ambientColor) : undefined,
      reflectionColor: isSet(object.reflectionColor) ? PBColor3.fromJSON(object.reflectionColor) : undefined,
      reflectivityColor: isSet(object.reflectivityColor) ? PBColor3.fromJSON(object.reflectivityColor) : undefined,
      directIntensity: isSet(object.directIntensity) ? Number(object.directIntensity) : 0,
      microSurface: isSet(object.microSurface) ? Number(object.microSurface) : 0,
      emissiveIntensity: isSet(object.emissiveIntensity) ? Number(object.emissiveIntensity) : 0,
      environmentIntensity: isSet(object.environmentIntensity) ? Number(object.environmentIntensity) : 0,
      specularIntensity: isSet(object.specularIntensity) ? Number(object.specularIntensity) : 0,
      albedoTexture: isSet(object.albedoTexture) ? PBTexture.fromJSON(object.albedoTexture) : undefined,
      alphaTexture: isSet(object.alphaTexture) ? PBTexture.fromJSON(object.alphaTexture) : undefined,
      emissiveTexture: isSet(object.emissiveTexture) ? PBTexture.fromJSON(object.emissiveTexture) : undefined,
      bumpTexture: isSet(object.bumpTexture) ? PBTexture.fromJSON(object.bumpTexture) : undefined,
      refractionTexture: isSet(object.refractionTexture) ? PBTexture.fromJSON(object.refractionTexture) : undefined,
      disableLighting: isSet(object.disableLighting) ? Boolean(object.disableLighting) : false,
      transparencyMode: isSet(object.transparencyMode) ? Number(object.transparencyMode) : 0,
      hasAlpha: isSet(object.hasAlpha) ? Boolean(object.hasAlpha) : false,
    };
  },

  toJSON(message: PBMaterial): unknown {
    const obj: any = {};
    message.alpha !== undefined && (obj.alpha = message.alpha);
    message.albedoColor !== undefined &&
      (obj.albedoColor = message.albedoColor ? PBColor3.toJSON(message.albedoColor) : undefined);
    message.emissiveColor !== undefined &&
      (obj.emissiveColor = message.emissiveColor ? PBColor3.toJSON(message.emissiveColor) : undefined);
    message.metallic !== undefined && (obj.metallic = message.metallic);
    message.roughness !== undefined && (obj.roughness = message.roughness);
    message.ambientColor !== undefined &&
      (obj.ambientColor = message.ambientColor ? PBColor3.toJSON(message.ambientColor) : undefined);
    message.reflectionColor !== undefined &&
      (obj.reflectionColor = message.reflectionColor ? PBColor3.toJSON(message.reflectionColor) : undefined);
    message.reflectivityColor !== undefined &&
      (obj.reflectivityColor = message.reflectivityColor ? PBColor3.toJSON(message.reflectivityColor) : undefined);
    message.directIntensity !== undefined && (obj.directIntensity = message.directIntensity);
    message.microSurface !== undefined && (obj.microSurface = message.microSurface);
    message.emissiveIntensity !== undefined && (obj.emissiveIntensity = message.emissiveIntensity);
    message.environmentIntensity !== undefined && (obj.environmentIntensity = message.environmentIntensity);
    message.specularIntensity !== undefined && (obj.specularIntensity = message.specularIntensity);
    message.albedoTexture !== undefined &&
      (obj.albedoTexture = message.albedoTexture ? PBTexture.toJSON(message.albedoTexture) : undefined);
    message.alphaTexture !== undefined &&
      (obj.alphaTexture = message.alphaTexture ? PBTexture.toJSON(message.alphaTexture) : undefined);
    message.emissiveTexture !== undefined &&
      (obj.emissiveTexture = message.emissiveTexture ? PBTexture.toJSON(message.emissiveTexture) : undefined);
    message.bumpTexture !== undefined &&
      (obj.bumpTexture = message.bumpTexture ? PBTexture.toJSON(message.bumpTexture) : undefined);
    message.refractionTexture !== undefined &&
      (obj.refractionTexture = message.refractionTexture ? PBTexture.toJSON(message.refractionTexture) : undefined);
    message.disableLighting !== undefined && (obj.disableLighting = message.disableLighting);
    message.transparencyMode !== undefined && (obj.transparencyMode = message.transparencyMode);
    message.hasAlpha !== undefined && (obj.hasAlpha = message.hasAlpha);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBMaterial>, I>>(object: I): PBMaterial {
    const message = createBasePBMaterial();
    message.alpha = object.alpha ?? 0;
    message.albedoColor = (object.albedoColor !== undefined && object.albedoColor !== null)
      ? PBColor3.fromPartial(object.albedoColor)
      : undefined;
    message.emissiveColor = (object.emissiveColor !== undefined && object.emissiveColor !== null)
      ? PBColor3.fromPartial(object.emissiveColor)
      : undefined;
    message.metallic = object.metallic ?? 0;
    message.roughness = object.roughness ?? 0;
    message.ambientColor = (object.ambientColor !== undefined && object.ambientColor !== null)
      ? PBColor3.fromPartial(object.ambientColor)
      : undefined;
    message.reflectionColor = (object.reflectionColor !== undefined && object.reflectionColor !== null)
      ? PBColor3.fromPartial(object.reflectionColor)
      : undefined;
    message.reflectivityColor = (object.reflectivityColor !== undefined && object.reflectivityColor !== null)
      ? PBColor3.fromPartial(object.reflectivityColor)
      : undefined;
    message.directIntensity = object.directIntensity ?? 0;
    message.microSurface = object.microSurface ?? 0;
    message.emissiveIntensity = object.emissiveIntensity ?? 0;
    message.environmentIntensity = object.environmentIntensity ?? 0;
    message.specularIntensity = object.specularIntensity ?? 0;
    message.albedoTexture = (object.albedoTexture !== undefined && object.albedoTexture !== null)
      ? PBTexture.fromPartial(object.albedoTexture)
      : undefined;
    message.alphaTexture = (object.alphaTexture !== undefined && object.alphaTexture !== null)
      ? PBTexture.fromPartial(object.alphaTexture)
      : undefined;
    message.emissiveTexture = (object.emissiveTexture !== undefined && object.emissiveTexture !== null)
      ? PBTexture.fromPartial(object.emissiveTexture)
      : undefined;
    message.bumpTexture = (object.bumpTexture !== undefined && object.bumpTexture !== null)
      ? PBTexture.fromPartial(object.bumpTexture)
      : undefined;
    message.refractionTexture = (object.refractionTexture !== undefined && object.refractionTexture !== null)
      ? PBTexture.fromPartial(object.refractionTexture)
      : undefined;
    message.disableLighting = object.disableLighting ?? false;
    message.transparencyMode = object.transparencyMode ?? 0;
    message.hasAlpha = object.hasAlpha ?? false;
    return message;
  },
};

function createBasePBNFTShape(): PBNFTShape {
  return { withCollisions: false, visible: false, src: "", color: undefined };
}

export const PBNFTShape = {
  encode(message: PBNFTShape, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withCollisions === true) {
      writer.uint32(8).bool(message.withCollisions);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    if (message.src !== "") {
      writer.uint32(26).string(message.src);
    }
    if (message.color !== undefined) {
      PBColor3.encode(message.color, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBNFTShape {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBNFTShape();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withCollisions = reader.bool();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        case 3:
          message.src = reader.string();
          break;
        case 4:
          message.color = PBColor3.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBNFTShape {
    return {
      withCollisions: isSet(object.withCollisions) ? Boolean(object.withCollisions) : false,
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      src: isSet(object.src) ? String(object.src) : "",
      color: isSet(object.color) ? PBColor3.fromJSON(object.color) : undefined,
    };
  },

  toJSON(message: PBNFTShape): unknown {
    const obj: any = {};
    message.withCollisions !== undefined && (obj.withCollisions = message.withCollisions);
    message.visible !== undefined && (obj.visible = message.visible);
    message.src !== undefined && (obj.src = message.src);
    message.color !== undefined && (obj.color = message.color ? PBColor3.toJSON(message.color) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBNFTShape>, I>>(object: I): PBNFTShape {
    const message = createBasePBNFTShape();
    message.withCollisions = object.withCollisions ?? false;
    message.visible = object.visible ?? false;
    message.src = object.src ?? "";
    message.color = (object.color !== undefined && object.color !== null)
      ? PBColor3.fromPartial(object.color)
      : undefined;
    return message;
  },
};

function createBasePBOBJShape(): PBOBJShape {
  return { withCollisions: false, visible: false, src: "" };
}

export const PBOBJShape = {
  encode(message: PBOBJShape, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withCollisions === true) {
      writer.uint32(8).bool(message.withCollisions);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    if (message.src !== "") {
      writer.uint32(26).string(message.src);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBOBJShape {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBOBJShape();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withCollisions = reader.bool();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        case 3:
          message.src = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBOBJShape {
    return {
      withCollisions: isSet(object.withCollisions) ? Boolean(object.withCollisions) : false,
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      src: isSet(object.src) ? String(object.src) : "",
    };
  },

  toJSON(message: PBOBJShape): unknown {
    const obj: any = {};
    message.withCollisions !== undefined && (obj.withCollisions = message.withCollisions);
    message.visible !== undefined && (obj.visible = message.visible);
    message.src !== undefined && (obj.src = message.src);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBOBJShape>, I>>(object: I): PBOBJShape {
    const message = createBasePBOBJShape();
    message.withCollisions = object.withCollisions ?? false;
    message.visible = object.visible ?? false;
    message.src = object.src ?? "";
    return message;
  },
};

function createBasePBPlaneShape(): PBPlaneShape {
  return { withCollisions: false, visible: false, width: 0, height: 0, uvs: [] };
}

export const PBPlaneShape = {
  encode(message: PBPlaneShape, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withCollisions === true) {
      writer.uint32(8).bool(message.withCollisions);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    if (message.width !== 0) {
      writer.uint32(29).float(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(37).float(message.height);
    }
    writer.uint32(42).fork();
    for (const v of message.uvs) {
      writer.float(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBPlaneShape {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBPlaneShape();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withCollisions = reader.bool();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        case 3:
          message.width = reader.float();
          break;
        case 4:
          message.height = reader.float();
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.uvs.push(reader.float());
            }
          } else {
            message.uvs.push(reader.float());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBPlaneShape {
    return {
      withCollisions: isSet(object.withCollisions) ? Boolean(object.withCollisions) : false,
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      uvs: Array.isArray(object?.uvs) ? object.uvs.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: PBPlaneShape): unknown {
    const obj: any = {};
    message.withCollisions !== undefined && (obj.withCollisions = message.withCollisions);
    message.visible !== undefined && (obj.visible = message.visible);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    if (message.uvs) {
      obj.uvs = message.uvs.map((e) => e);
    } else {
      obj.uvs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBPlaneShape>, I>>(object: I): PBPlaneShape {
    const message = createBasePBPlaneShape();
    message.withCollisions = object.withCollisions ?? false;
    message.visible = object.visible ?? false;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.uvs = object.uvs?.map((e) => e) || [];
    return message;
  },
};

function createBasePBShape(): PBShape {
  return { withCollisions: false, visible: false };
}

export const PBShape = {
  encode(message: PBShape, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withCollisions === true) {
      writer.uint32(8).bool(message.withCollisions);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBShape {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBShape();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withCollisions = reader.bool();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBShape {
    return {
      withCollisions: isSet(object.withCollisions) ? Boolean(object.withCollisions) : false,
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
    };
  },

  toJSON(message: PBShape): unknown {
    const obj: any = {};
    message.withCollisions !== undefined && (obj.withCollisions = message.withCollisions);
    message.visible !== undefined && (obj.visible = message.visible);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBShape>, I>>(object: I): PBShape {
    const message = createBasePBShape();
    message.withCollisions = object.withCollisions ?? false;
    message.visible = object.visible ?? false;
    return message;
  },
};

function createBasePBSphereShape(): PBSphereShape {
  return { withCollisions: false, visible: false };
}

export const PBSphereShape = {
  encode(message: PBSphereShape, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withCollisions === true) {
      writer.uint32(8).bool(message.withCollisions);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBSphereShape {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBSphereShape();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withCollisions = reader.bool();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBSphereShape {
    return {
      withCollisions: isSet(object.withCollisions) ? Boolean(object.withCollisions) : false,
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
    };
  },

  toJSON(message: PBSphereShape): unknown {
    const obj: any = {};
    message.withCollisions !== undefined && (obj.withCollisions = message.withCollisions);
    message.visible !== undefined && (obj.visible = message.visible);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBSphereShape>, I>>(object: I): PBSphereShape {
    const message = createBasePBSphereShape();
    message.withCollisions = object.withCollisions ?? false;
    message.visible = object.visible ?? false;
    return message;
  },
};

function createBasePBTextShape(): PBTextShape {
  return {
    withCollisions: false,
    visible: false,
    outlineWidth: 0,
    outlineColor: undefined,
    color: undefined,
    fontSize: 0,
    fontWeight: "",
    opacity: 0,
    value: "",
    lineSpacing: "",
    lineCount: 0,
    resizeToFit: false,
    textWrapping: false,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: undefined,
    zIndex: 0,
    hTextAlign: "",
    vTextAlign: "",
    width: 0,
    height: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    isPickable: false,
    billboard: false,
  };
}

export const PBTextShape = {
  encode(message: PBTextShape, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withCollisions === true) {
      writer.uint32(8).bool(message.withCollisions);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    if (message.outlineWidth !== 0) {
      writer.uint32(29).float(message.outlineWidth);
    }
    if (message.outlineColor !== undefined) {
      PBColor3.encode(message.outlineColor, writer.uint32(34).fork()).ldelim();
    }
    if (message.color !== undefined) {
      PBColor3.encode(message.color, writer.uint32(42).fork()).ldelim();
    }
    if (message.fontSize !== 0) {
      writer.uint32(53).float(message.fontSize);
    }
    if (message.fontWeight !== "") {
      writer.uint32(58).string(message.fontWeight);
    }
    if (message.opacity !== 0) {
      writer.uint32(69).float(message.opacity);
    }
    if (message.value !== "") {
      writer.uint32(74).string(message.value);
    }
    if (message.lineSpacing !== "") {
      writer.uint32(82).string(message.lineSpacing);
    }
    if (message.lineCount !== 0) {
      writer.uint32(93).float(message.lineCount);
    }
    if (message.resizeToFit === true) {
      writer.uint32(96).bool(message.resizeToFit);
    }
    if (message.textWrapping === true) {
      writer.uint32(104).bool(message.textWrapping);
    }
    if (message.shadowBlur !== 0) {
      writer.uint32(117).float(message.shadowBlur);
    }
    if (message.shadowOffsetX !== 0) {
      writer.uint32(125).float(message.shadowOffsetX);
    }
    if (message.shadowOffsetY !== 0) {
      writer.uint32(133).float(message.shadowOffsetY);
    }
    if (message.shadowColor !== undefined) {
      PBColor3.encode(message.shadowColor, writer.uint32(138).fork()).ldelim();
    }
    if (message.zIndex !== 0) {
      writer.uint32(149).float(message.zIndex);
    }
    if (message.hTextAlign !== "") {
      writer.uint32(154).string(message.hTextAlign);
    }
    if (message.vTextAlign !== "") {
      writer.uint32(162).string(message.vTextAlign);
    }
    if (message.width !== 0) {
      writer.uint32(173).float(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(181).float(message.height);
    }
    if (message.paddingTop !== 0) {
      writer.uint32(189).float(message.paddingTop);
    }
    if (message.paddingRight !== 0) {
      writer.uint32(197).float(message.paddingRight);
    }
    if (message.paddingBottom !== 0) {
      writer.uint32(205).float(message.paddingBottom);
    }
    if (message.paddingLeft !== 0) {
      writer.uint32(213).float(message.paddingLeft);
    }
    if (message.isPickable === true) {
      writer.uint32(216).bool(message.isPickable);
    }
    if (message.billboard === true) {
      writer.uint32(224).bool(message.billboard);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBTextShape {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBTextShape();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withCollisions = reader.bool();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        case 3:
          message.outlineWidth = reader.float();
          break;
        case 4:
          message.outlineColor = PBColor3.decode(reader, reader.uint32());
          break;
        case 5:
          message.color = PBColor3.decode(reader, reader.uint32());
          break;
        case 6:
          message.fontSize = reader.float();
          break;
        case 7:
          message.fontWeight = reader.string();
          break;
        case 8:
          message.opacity = reader.float();
          break;
        case 9:
          message.value = reader.string();
          break;
        case 10:
          message.lineSpacing = reader.string();
          break;
        case 11:
          message.lineCount = reader.float();
          break;
        case 12:
          message.resizeToFit = reader.bool();
          break;
        case 13:
          message.textWrapping = reader.bool();
          break;
        case 14:
          message.shadowBlur = reader.float();
          break;
        case 15:
          message.shadowOffsetX = reader.float();
          break;
        case 16:
          message.shadowOffsetY = reader.float();
          break;
        case 17:
          message.shadowColor = PBColor3.decode(reader, reader.uint32());
          break;
        case 18:
          message.zIndex = reader.float();
          break;
        case 19:
          message.hTextAlign = reader.string();
          break;
        case 20:
          message.vTextAlign = reader.string();
          break;
        case 21:
          message.width = reader.float();
          break;
        case 22:
          message.height = reader.float();
          break;
        case 23:
          message.paddingTop = reader.float();
          break;
        case 24:
          message.paddingRight = reader.float();
          break;
        case 25:
          message.paddingBottom = reader.float();
          break;
        case 26:
          message.paddingLeft = reader.float();
          break;
        case 27:
          message.isPickable = reader.bool();
          break;
        case 28:
          message.billboard = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBTextShape {
    return {
      withCollisions: isSet(object.withCollisions) ? Boolean(object.withCollisions) : false,
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      outlineWidth: isSet(object.outlineWidth) ? Number(object.outlineWidth) : 0,
      outlineColor: isSet(object.outlineColor) ? PBColor3.fromJSON(object.outlineColor) : undefined,
      color: isSet(object.color) ? PBColor3.fromJSON(object.color) : undefined,
      fontSize: isSet(object.fontSize) ? Number(object.fontSize) : 0,
      fontWeight: isSet(object.fontWeight) ? String(object.fontWeight) : "",
      opacity: isSet(object.opacity) ? Number(object.opacity) : 0,
      value: isSet(object.value) ? String(object.value) : "",
      lineSpacing: isSet(object.lineSpacing) ? String(object.lineSpacing) : "",
      lineCount: isSet(object.lineCount) ? Number(object.lineCount) : 0,
      resizeToFit: isSet(object.resizeToFit) ? Boolean(object.resizeToFit) : false,
      textWrapping: isSet(object.textWrapping) ? Boolean(object.textWrapping) : false,
      shadowBlur: isSet(object.shadowBlur) ? Number(object.shadowBlur) : 0,
      shadowOffsetX: isSet(object.shadowOffsetX) ? Number(object.shadowOffsetX) : 0,
      shadowOffsetY: isSet(object.shadowOffsetY) ? Number(object.shadowOffsetY) : 0,
      shadowColor: isSet(object.shadowColor) ? PBColor3.fromJSON(object.shadowColor) : undefined,
      zIndex: isSet(object.zIndex) ? Number(object.zIndex) : 0,
      hTextAlign: isSet(object.hTextAlign) ? String(object.hTextAlign) : "",
      vTextAlign: isSet(object.vTextAlign) ? String(object.vTextAlign) : "",
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      paddingTop: isSet(object.paddingTop) ? Number(object.paddingTop) : 0,
      paddingRight: isSet(object.paddingRight) ? Number(object.paddingRight) : 0,
      paddingBottom: isSet(object.paddingBottom) ? Number(object.paddingBottom) : 0,
      paddingLeft: isSet(object.paddingLeft) ? Number(object.paddingLeft) : 0,
      isPickable: isSet(object.isPickable) ? Boolean(object.isPickable) : false,
      billboard: isSet(object.billboard) ? Boolean(object.billboard) : false,
    };
  },

  toJSON(message: PBTextShape): unknown {
    const obj: any = {};
    message.withCollisions !== undefined && (obj.withCollisions = message.withCollisions);
    message.visible !== undefined && (obj.visible = message.visible);
    message.outlineWidth !== undefined && (obj.outlineWidth = message.outlineWidth);
    message.outlineColor !== undefined &&
      (obj.outlineColor = message.outlineColor ? PBColor3.toJSON(message.outlineColor) : undefined);
    message.color !== undefined && (obj.color = message.color ? PBColor3.toJSON(message.color) : undefined);
    message.fontSize !== undefined && (obj.fontSize = message.fontSize);
    message.fontWeight !== undefined && (obj.fontWeight = message.fontWeight);
    message.opacity !== undefined && (obj.opacity = message.opacity);
    message.value !== undefined && (obj.value = message.value);
    message.lineSpacing !== undefined && (obj.lineSpacing = message.lineSpacing);
    message.lineCount !== undefined && (obj.lineCount = message.lineCount);
    message.resizeToFit !== undefined && (obj.resizeToFit = message.resizeToFit);
    message.textWrapping !== undefined && (obj.textWrapping = message.textWrapping);
    message.shadowBlur !== undefined && (obj.shadowBlur = message.shadowBlur);
    message.shadowOffsetX !== undefined && (obj.shadowOffsetX = message.shadowOffsetX);
    message.shadowOffsetY !== undefined && (obj.shadowOffsetY = message.shadowOffsetY);
    message.shadowColor !== undefined &&
      (obj.shadowColor = message.shadowColor ? PBColor3.toJSON(message.shadowColor) : undefined);
    message.zIndex !== undefined && (obj.zIndex = message.zIndex);
    message.hTextAlign !== undefined && (obj.hTextAlign = message.hTextAlign);
    message.vTextAlign !== undefined && (obj.vTextAlign = message.vTextAlign);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.paddingTop !== undefined && (obj.paddingTop = message.paddingTop);
    message.paddingRight !== undefined && (obj.paddingRight = message.paddingRight);
    message.paddingBottom !== undefined && (obj.paddingBottom = message.paddingBottom);
    message.paddingLeft !== undefined && (obj.paddingLeft = message.paddingLeft);
    message.isPickable !== undefined && (obj.isPickable = message.isPickable);
    message.billboard !== undefined && (obj.billboard = message.billboard);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBTextShape>, I>>(object: I): PBTextShape {
    const message = createBasePBTextShape();
    message.withCollisions = object.withCollisions ?? false;
    message.visible = object.visible ?? false;
    message.outlineWidth = object.outlineWidth ?? 0;
    message.outlineColor = (object.outlineColor !== undefined && object.outlineColor !== null)
      ? PBColor3.fromPartial(object.outlineColor)
      : undefined;
    message.color = (object.color !== undefined && object.color !== null)
      ? PBColor3.fromPartial(object.color)
      : undefined;
    message.fontSize = object.fontSize ?? 0;
    message.fontWeight = object.fontWeight ?? "";
    message.opacity = object.opacity ?? 0;
    message.value = object.value ?? "";
    message.lineSpacing = object.lineSpacing ?? "";
    message.lineCount = object.lineCount ?? 0;
    message.resizeToFit = object.resizeToFit ?? false;
    message.textWrapping = object.textWrapping ?? false;
    message.shadowBlur = object.shadowBlur ?? 0;
    message.shadowOffsetX = object.shadowOffsetX ?? 0;
    message.shadowOffsetY = object.shadowOffsetY ?? 0;
    message.shadowColor = (object.shadowColor !== undefined && object.shadowColor !== null)
      ? PBColor3.fromPartial(object.shadowColor)
      : undefined;
    message.zIndex = object.zIndex ?? 0;
    message.hTextAlign = object.hTextAlign ?? "";
    message.vTextAlign = object.vTextAlign ?? "";
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.paddingTop = object.paddingTop ?? 0;
    message.paddingRight = object.paddingRight ?? 0;
    message.paddingBottom = object.paddingBottom ?? 0;
    message.paddingLeft = object.paddingLeft ?? 0;
    message.isPickable = object.isPickable ?? false;
    message.billboard = object.billboard ?? false;
    return message;
  },
};

function createBasePBTexture(): PBTexture {
  return { src: "", samplingMode: 0, wrap: 0, hasAlpha: false };
}

export const PBTexture = {
  encode(message: PBTexture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.src !== "") {
      writer.uint32(10).string(message.src);
    }
    if (message.samplingMode !== 0) {
      writer.uint32(21).float(message.samplingMode);
    }
    if (message.wrap !== 0) {
      writer.uint32(29).float(message.wrap);
    }
    if (message.hasAlpha === true) {
      writer.uint32(32).bool(message.hasAlpha);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBTexture {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBTexture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.src = reader.string();
          break;
        case 2:
          message.samplingMode = reader.float();
          break;
        case 3:
          message.wrap = reader.float();
          break;
        case 4:
          message.hasAlpha = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBTexture {
    return {
      src: isSet(object.src) ? String(object.src) : "",
      samplingMode: isSet(object.samplingMode) ? Number(object.samplingMode) : 0,
      wrap: isSet(object.wrap) ? Number(object.wrap) : 0,
      hasAlpha: isSet(object.hasAlpha) ? Boolean(object.hasAlpha) : false,
    };
  },

  toJSON(message: PBTexture): unknown {
    const obj: any = {};
    message.src !== undefined && (obj.src = message.src);
    message.samplingMode !== undefined && (obj.samplingMode = message.samplingMode);
    message.wrap !== undefined && (obj.wrap = message.wrap);
    message.hasAlpha !== undefined && (obj.hasAlpha = message.hasAlpha);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBTexture>, I>>(object: I): PBTexture {
    const message = createBasePBTexture();
    message.src = object.src ?? "";
    message.samplingMode = object.samplingMode ?? 0;
    message.wrap = object.wrap ?? 0;
    message.hasAlpha = object.hasAlpha ?? false;
    return message;
  },
};

function createBasePBUIButton(): PBUIButton {
  return {
    name: "",
    visible: false,
    opacity: 0,
    hAlign: "",
    vAlign: "",
    width: "",
    height: "",
    positionX: "",
    positionY: "",
    isPointerBlocker: false,
    parent: undefined,
    fontSize: 0,
    fontWeight: "",
    thickness: 0,
    cornerRadius: 0,
    color: undefined,
    background: undefined,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: undefined,
    text: "",
  };
}

export const PBUIButton = {
  encode(message: PBUIButton, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    if (message.opacity !== 0) {
      writer.uint32(29).float(message.opacity);
    }
    if (message.hAlign !== "") {
      writer.uint32(34).string(message.hAlign);
    }
    if (message.vAlign !== "") {
      writer.uint32(42).string(message.vAlign);
    }
    if (message.width !== "") {
      writer.uint32(50).string(message.width);
    }
    if (message.height !== "") {
      writer.uint32(58).string(message.height);
    }
    if (message.positionX !== "") {
      writer.uint32(66).string(message.positionX);
    }
    if (message.positionY !== "") {
      writer.uint32(74).string(message.positionY);
    }
    if (message.isPointerBlocker === true) {
      writer.uint32(80).bool(message.isPointerBlocker);
    }
    if (message.parent !== undefined) {
      PBUIShape.encode(message.parent, writer.uint32(90).fork()).ldelim();
    }
    if (message.fontSize !== 0) {
      writer.uint32(101).float(message.fontSize);
    }
    if (message.fontWeight !== "") {
      writer.uint32(106).string(message.fontWeight);
    }
    if (message.thickness !== 0) {
      writer.uint32(117).float(message.thickness);
    }
    if (message.cornerRadius !== 0) {
      writer.uint32(125).float(message.cornerRadius);
    }
    if (message.color !== undefined) {
      PBColor4.encode(message.color, writer.uint32(130).fork()).ldelim();
    }
    if (message.background !== undefined) {
      PBColor4.encode(message.background, writer.uint32(138).fork()).ldelim();
    }
    if (message.paddingTop !== 0) {
      writer.uint32(149).float(message.paddingTop);
    }
    if (message.paddingRight !== 0) {
      writer.uint32(157).float(message.paddingRight);
    }
    if (message.paddingBottom !== 0) {
      writer.uint32(165).float(message.paddingBottom);
    }
    if (message.paddingLeft !== 0) {
      writer.uint32(173).float(message.paddingLeft);
    }
    if (message.shadowBlur !== 0) {
      writer.uint32(181).float(message.shadowBlur);
    }
    if (message.shadowOffsetX !== 0) {
      writer.uint32(189).float(message.shadowOffsetX);
    }
    if (message.shadowOffsetY !== 0) {
      writer.uint32(197).float(message.shadowOffsetY);
    }
    if (message.shadowColor !== undefined) {
      PBColor4.encode(message.shadowColor, writer.uint32(202).fork()).ldelim();
    }
    if (message.text !== "") {
      writer.uint32(210).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBUIButton {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBUIButton();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        case 3:
          message.opacity = reader.float();
          break;
        case 4:
          message.hAlign = reader.string();
          break;
        case 5:
          message.vAlign = reader.string();
          break;
        case 6:
          message.width = reader.string();
          break;
        case 7:
          message.height = reader.string();
          break;
        case 8:
          message.positionX = reader.string();
          break;
        case 9:
          message.positionY = reader.string();
          break;
        case 10:
          message.isPointerBlocker = reader.bool();
          break;
        case 11:
          message.parent = PBUIShape.decode(reader, reader.uint32());
          break;
        case 12:
          message.fontSize = reader.float();
          break;
        case 13:
          message.fontWeight = reader.string();
          break;
        case 14:
          message.thickness = reader.float();
          break;
        case 15:
          message.cornerRadius = reader.float();
          break;
        case 16:
          message.color = PBColor4.decode(reader, reader.uint32());
          break;
        case 17:
          message.background = PBColor4.decode(reader, reader.uint32());
          break;
        case 18:
          message.paddingTop = reader.float();
          break;
        case 19:
          message.paddingRight = reader.float();
          break;
        case 20:
          message.paddingBottom = reader.float();
          break;
        case 21:
          message.paddingLeft = reader.float();
          break;
        case 22:
          message.shadowBlur = reader.float();
          break;
        case 23:
          message.shadowOffsetX = reader.float();
          break;
        case 24:
          message.shadowOffsetY = reader.float();
          break;
        case 25:
          message.shadowColor = PBColor4.decode(reader, reader.uint32());
          break;
        case 26:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBUIButton {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      opacity: isSet(object.opacity) ? Number(object.opacity) : 0,
      hAlign: isSet(object.hAlign) ? String(object.hAlign) : "",
      vAlign: isSet(object.vAlign) ? String(object.vAlign) : "",
      width: isSet(object.width) ? String(object.width) : "",
      height: isSet(object.height) ? String(object.height) : "",
      positionX: isSet(object.positionX) ? String(object.positionX) : "",
      positionY: isSet(object.positionY) ? String(object.positionY) : "",
      isPointerBlocker: isSet(object.isPointerBlocker) ? Boolean(object.isPointerBlocker) : false,
      parent: isSet(object.parent) ? PBUIShape.fromJSON(object.parent) : undefined,
      fontSize: isSet(object.fontSize) ? Number(object.fontSize) : 0,
      fontWeight: isSet(object.fontWeight) ? String(object.fontWeight) : "",
      thickness: isSet(object.thickness) ? Number(object.thickness) : 0,
      cornerRadius: isSet(object.cornerRadius) ? Number(object.cornerRadius) : 0,
      color: isSet(object.color) ? PBColor4.fromJSON(object.color) : undefined,
      background: isSet(object.background) ? PBColor4.fromJSON(object.background) : undefined,
      paddingTop: isSet(object.paddingTop) ? Number(object.paddingTop) : 0,
      paddingRight: isSet(object.paddingRight) ? Number(object.paddingRight) : 0,
      paddingBottom: isSet(object.paddingBottom) ? Number(object.paddingBottom) : 0,
      paddingLeft: isSet(object.paddingLeft) ? Number(object.paddingLeft) : 0,
      shadowBlur: isSet(object.shadowBlur) ? Number(object.shadowBlur) : 0,
      shadowOffsetX: isSet(object.shadowOffsetX) ? Number(object.shadowOffsetX) : 0,
      shadowOffsetY: isSet(object.shadowOffsetY) ? Number(object.shadowOffsetY) : 0,
      shadowColor: isSet(object.shadowColor) ? PBColor4.fromJSON(object.shadowColor) : undefined,
      text: isSet(object.text) ? String(object.text) : "",
    };
  },

  toJSON(message: PBUIButton): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.visible !== undefined && (obj.visible = message.visible);
    message.opacity !== undefined && (obj.opacity = message.opacity);
    message.hAlign !== undefined && (obj.hAlign = message.hAlign);
    message.vAlign !== undefined && (obj.vAlign = message.vAlign);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.positionX !== undefined && (obj.positionX = message.positionX);
    message.positionY !== undefined && (obj.positionY = message.positionY);
    message.isPointerBlocker !== undefined && (obj.isPointerBlocker = message.isPointerBlocker);
    message.parent !== undefined && (obj.parent = message.parent ? PBUIShape.toJSON(message.parent) : undefined);
    message.fontSize !== undefined && (obj.fontSize = message.fontSize);
    message.fontWeight !== undefined && (obj.fontWeight = message.fontWeight);
    message.thickness !== undefined && (obj.thickness = message.thickness);
    message.cornerRadius !== undefined && (obj.cornerRadius = message.cornerRadius);
    message.color !== undefined && (obj.color = message.color ? PBColor4.toJSON(message.color) : undefined);
    message.background !== undefined &&
      (obj.background = message.background ? PBColor4.toJSON(message.background) : undefined);
    message.paddingTop !== undefined && (obj.paddingTop = message.paddingTop);
    message.paddingRight !== undefined && (obj.paddingRight = message.paddingRight);
    message.paddingBottom !== undefined && (obj.paddingBottom = message.paddingBottom);
    message.paddingLeft !== undefined && (obj.paddingLeft = message.paddingLeft);
    message.shadowBlur !== undefined && (obj.shadowBlur = message.shadowBlur);
    message.shadowOffsetX !== undefined && (obj.shadowOffsetX = message.shadowOffsetX);
    message.shadowOffsetY !== undefined && (obj.shadowOffsetY = message.shadowOffsetY);
    message.shadowColor !== undefined &&
      (obj.shadowColor = message.shadowColor ? PBColor4.toJSON(message.shadowColor) : undefined);
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBUIButton>, I>>(object: I): PBUIButton {
    const message = createBasePBUIButton();
    message.name = object.name ?? "";
    message.visible = object.visible ?? false;
    message.opacity = object.opacity ?? 0;
    message.hAlign = object.hAlign ?? "";
    message.vAlign = object.vAlign ?? "";
    message.width = object.width ?? "";
    message.height = object.height ?? "";
    message.positionX = object.positionX ?? "";
    message.positionY = object.positionY ?? "";
    message.isPointerBlocker = object.isPointerBlocker ?? false;
    message.parent = (object.parent !== undefined && object.parent !== null)
      ? PBUIShape.fromPartial(object.parent)
      : undefined;
    message.fontSize = object.fontSize ?? 0;
    message.fontWeight = object.fontWeight ?? "";
    message.thickness = object.thickness ?? 0;
    message.cornerRadius = object.cornerRadius ?? 0;
    message.color = (object.color !== undefined && object.color !== null)
      ? PBColor4.fromPartial(object.color)
      : undefined;
    message.background = (object.background !== undefined && object.background !== null)
      ? PBColor4.fromPartial(object.background)
      : undefined;
    message.paddingTop = object.paddingTop ?? 0;
    message.paddingRight = object.paddingRight ?? 0;
    message.paddingBottom = object.paddingBottom ?? 0;
    message.paddingLeft = object.paddingLeft ?? 0;
    message.shadowBlur = object.shadowBlur ?? 0;
    message.shadowOffsetX = object.shadowOffsetX ?? 0;
    message.shadowOffsetY = object.shadowOffsetY ?? 0;
    message.shadowColor = (object.shadowColor !== undefined && object.shadowColor !== null)
      ? PBColor4.fromPartial(object.shadowColor)
      : undefined;
    message.text = object.text ?? "";
    return message;
  },
};

function createBasePBUICanvas(): PBUICanvas {
  return {
    name: "",
    visible: false,
    opacity: 0,
    hAlign: "",
    vAlign: "",
    width: "",
    height: "",
    positionX: "",
    positionY: "",
    isPointerBlocker: false,
    parent: undefined,
  };
}

export const PBUICanvas = {
  encode(message: PBUICanvas, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    if (message.opacity !== 0) {
      writer.uint32(29).float(message.opacity);
    }
    if (message.hAlign !== "") {
      writer.uint32(34).string(message.hAlign);
    }
    if (message.vAlign !== "") {
      writer.uint32(42).string(message.vAlign);
    }
    if (message.width !== "") {
      writer.uint32(50).string(message.width);
    }
    if (message.height !== "") {
      writer.uint32(58).string(message.height);
    }
    if (message.positionX !== "") {
      writer.uint32(66).string(message.positionX);
    }
    if (message.positionY !== "") {
      writer.uint32(74).string(message.positionY);
    }
    if (message.isPointerBlocker === true) {
      writer.uint32(80).bool(message.isPointerBlocker);
    }
    if (message.parent !== undefined) {
      PBUIShape.encode(message.parent, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBUICanvas {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBUICanvas();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        case 3:
          message.opacity = reader.float();
          break;
        case 4:
          message.hAlign = reader.string();
          break;
        case 5:
          message.vAlign = reader.string();
          break;
        case 6:
          message.width = reader.string();
          break;
        case 7:
          message.height = reader.string();
          break;
        case 8:
          message.positionX = reader.string();
          break;
        case 9:
          message.positionY = reader.string();
          break;
        case 10:
          message.isPointerBlocker = reader.bool();
          break;
        case 11:
          message.parent = PBUIShape.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBUICanvas {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      opacity: isSet(object.opacity) ? Number(object.opacity) : 0,
      hAlign: isSet(object.hAlign) ? String(object.hAlign) : "",
      vAlign: isSet(object.vAlign) ? String(object.vAlign) : "",
      width: isSet(object.width) ? String(object.width) : "",
      height: isSet(object.height) ? String(object.height) : "",
      positionX: isSet(object.positionX) ? String(object.positionX) : "",
      positionY: isSet(object.positionY) ? String(object.positionY) : "",
      isPointerBlocker: isSet(object.isPointerBlocker) ? Boolean(object.isPointerBlocker) : false,
      parent: isSet(object.parent) ? PBUIShape.fromJSON(object.parent) : undefined,
    };
  },

  toJSON(message: PBUICanvas): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.visible !== undefined && (obj.visible = message.visible);
    message.opacity !== undefined && (obj.opacity = message.opacity);
    message.hAlign !== undefined && (obj.hAlign = message.hAlign);
    message.vAlign !== undefined && (obj.vAlign = message.vAlign);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.positionX !== undefined && (obj.positionX = message.positionX);
    message.positionY !== undefined && (obj.positionY = message.positionY);
    message.isPointerBlocker !== undefined && (obj.isPointerBlocker = message.isPointerBlocker);
    message.parent !== undefined && (obj.parent = message.parent ? PBUIShape.toJSON(message.parent) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBUICanvas>, I>>(object: I): PBUICanvas {
    const message = createBasePBUICanvas();
    message.name = object.name ?? "";
    message.visible = object.visible ?? false;
    message.opacity = object.opacity ?? 0;
    message.hAlign = object.hAlign ?? "";
    message.vAlign = object.vAlign ?? "";
    message.width = object.width ?? "";
    message.height = object.height ?? "";
    message.positionX = object.positionX ?? "";
    message.positionY = object.positionY ?? "";
    message.isPointerBlocker = object.isPointerBlocker ?? false;
    message.parent = (object.parent !== undefined && object.parent !== null)
      ? PBUIShape.fromPartial(object.parent)
      : undefined;
    return message;
  },
};

function createBasePBUIContainerRect(): PBUIContainerRect {
  return {
    name: "",
    visible: false,
    opacity: 0,
    hAlign: "",
    vAlign: "",
    width: "",
    height: "",
    positionX: "",
    positionY: "",
    isPointerBlocker: false,
    parent: undefined,
    adaptWidth: false,
    adaptHeight: false,
    thickness: 0,
    color: undefined,
    alignmentUsesSize: false,
  };
}

export const PBUIContainerRect = {
  encode(message: PBUIContainerRect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    if (message.opacity !== 0) {
      writer.uint32(29).float(message.opacity);
    }
    if (message.hAlign !== "") {
      writer.uint32(34).string(message.hAlign);
    }
    if (message.vAlign !== "") {
      writer.uint32(42).string(message.vAlign);
    }
    if (message.width !== "") {
      writer.uint32(50).string(message.width);
    }
    if (message.height !== "") {
      writer.uint32(58).string(message.height);
    }
    if (message.positionX !== "") {
      writer.uint32(66).string(message.positionX);
    }
    if (message.positionY !== "") {
      writer.uint32(74).string(message.positionY);
    }
    if (message.isPointerBlocker === true) {
      writer.uint32(80).bool(message.isPointerBlocker);
    }
    if (message.parent !== undefined) {
      PBUIShape.encode(message.parent, writer.uint32(90).fork()).ldelim();
    }
    if (message.adaptWidth === true) {
      writer.uint32(96).bool(message.adaptWidth);
    }
    if (message.adaptHeight === true) {
      writer.uint32(104).bool(message.adaptHeight);
    }
    if (message.thickness !== 0) {
      writer.uint32(117).float(message.thickness);
    }
    if (message.color !== undefined) {
      PBColor4.encode(message.color, writer.uint32(122).fork()).ldelim();
    }
    if (message.alignmentUsesSize === true) {
      writer.uint32(128).bool(message.alignmentUsesSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBUIContainerRect {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBUIContainerRect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        case 3:
          message.opacity = reader.float();
          break;
        case 4:
          message.hAlign = reader.string();
          break;
        case 5:
          message.vAlign = reader.string();
          break;
        case 6:
          message.width = reader.string();
          break;
        case 7:
          message.height = reader.string();
          break;
        case 8:
          message.positionX = reader.string();
          break;
        case 9:
          message.positionY = reader.string();
          break;
        case 10:
          message.isPointerBlocker = reader.bool();
          break;
        case 11:
          message.parent = PBUIShape.decode(reader, reader.uint32());
          break;
        case 12:
          message.adaptWidth = reader.bool();
          break;
        case 13:
          message.adaptHeight = reader.bool();
          break;
        case 14:
          message.thickness = reader.float();
          break;
        case 15:
          message.color = PBColor4.decode(reader, reader.uint32());
          break;
        case 16:
          message.alignmentUsesSize = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBUIContainerRect {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      opacity: isSet(object.opacity) ? Number(object.opacity) : 0,
      hAlign: isSet(object.hAlign) ? String(object.hAlign) : "",
      vAlign: isSet(object.vAlign) ? String(object.vAlign) : "",
      width: isSet(object.width) ? String(object.width) : "",
      height: isSet(object.height) ? String(object.height) : "",
      positionX: isSet(object.positionX) ? String(object.positionX) : "",
      positionY: isSet(object.positionY) ? String(object.positionY) : "",
      isPointerBlocker: isSet(object.isPointerBlocker) ? Boolean(object.isPointerBlocker) : false,
      parent: isSet(object.parent) ? PBUIShape.fromJSON(object.parent) : undefined,
      adaptWidth: isSet(object.adaptWidth) ? Boolean(object.adaptWidth) : false,
      adaptHeight: isSet(object.adaptHeight) ? Boolean(object.adaptHeight) : false,
      thickness: isSet(object.thickness) ? Number(object.thickness) : 0,
      color: isSet(object.color) ? PBColor4.fromJSON(object.color) : undefined,
      alignmentUsesSize: isSet(object.alignmentUsesSize) ? Boolean(object.alignmentUsesSize) : false,
    };
  },

  toJSON(message: PBUIContainerRect): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.visible !== undefined && (obj.visible = message.visible);
    message.opacity !== undefined && (obj.opacity = message.opacity);
    message.hAlign !== undefined && (obj.hAlign = message.hAlign);
    message.vAlign !== undefined && (obj.vAlign = message.vAlign);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.positionX !== undefined && (obj.positionX = message.positionX);
    message.positionY !== undefined && (obj.positionY = message.positionY);
    message.isPointerBlocker !== undefined && (obj.isPointerBlocker = message.isPointerBlocker);
    message.parent !== undefined && (obj.parent = message.parent ? PBUIShape.toJSON(message.parent) : undefined);
    message.adaptWidth !== undefined && (obj.adaptWidth = message.adaptWidth);
    message.adaptHeight !== undefined && (obj.adaptHeight = message.adaptHeight);
    message.thickness !== undefined && (obj.thickness = message.thickness);
    message.color !== undefined && (obj.color = message.color ? PBColor4.toJSON(message.color) : undefined);
    message.alignmentUsesSize !== undefined && (obj.alignmentUsesSize = message.alignmentUsesSize);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBUIContainerRect>, I>>(object: I): PBUIContainerRect {
    const message = createBasePBUIContainerRect();
    message.name = object.name ?? "";
    message.visible = object.visible ?? false;
    message.opacity = object.opacity ?? 0;
    message.hAlign = object.hAlign ?? "";
    message.vAlign = object.vAlign ?? "";
    message.width = object.width ?? "";
    message.height = object.height ?? "";
    message.positionX = object.positionX ?? "";
    message.positionY = object.positionY ?? "";
    message.isPointerBlocker = object.isPointerBlocker ?? false;
    message.parent = (object.parent !== undefined && object.parent !== null)
      ? PBUIShape.fromPartial(object.parent)
      : undefined;
    message.adaptWidth = object.adaptWidth ?? false;
    message.adaptHeight = object.adaptHeight ?? false;
    message.thickness = object.thickness ?? 0;
    message.color = (object.color !== undefined && object.color !== null)
      ? PBColor4.fromPartial(object.color)
      : undefined;
    message.alignmentUsesSize = object.alignmentUsesSize ?? false;
    return message;
  },
};

function createBasePBUIContainerStack(): PBUIContainerStack {
  return {
    name: "",
    visible: false,
    opacity: 0,
    hAlign: "",
    vAlign: "",
    width: "",
    height: "",
    positionX: "",
    positionY: "",
    isPointerBlocker: false,
    parent: undefined,
    adaptWidth: false,
    adaptHeight: false,
    color: undefined,
    stackOrientation: 0,
    spacing: 0,
  };
}

export const PBUIContainerStack = {
  encode(message: PBUIContainerStack, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    if (message.opacity !== 0) {
      writer.uint32(29).float(message.opacity);
    }
    if (message.hAlign !== "") {
      writer.uint32(34).string(message.hAlign);
    }
    if (message.vAlign !== "") {
      writer.uint32(42).string(message.vAlign);
    }
    if (message.width !== "") {
      writer.uint32(50).string(message.width);
    }
    if (message.height !== "") {
      writer.uint32(58).string(message.height);
    }
    if (message.positionX !== "") {
      writer.uint32(66).string(message.positionX);
    }
    if (message.positionY !== "") {
      writer.uint32(74).string(message.positionY);
    }
    if (message.isPointerBlocker === true) {
      writer.uint32(80).bool(message.isPointerBlocker);
    }
    if (message.parent !== undefined) {
      PBUIShape.encode(message.parent, writer.uint32(90).fork()).ldelim();
    }
    if (message.adaptWidth === true) {
      writer.uint32(96).bool(message.adaptWidth);
    }
    if (message.adaptHeight === true) {
      writer.uint32(104).bool(message.adaptHeight);
    }
    if (message.color !== undefined) {
      PBColor4.encode(message.color, writer.uint32(114).fork()).ldelim();
    }
    if (message.stackOrientation !== 0) {
      writer.uint32(120).int32(message.stackOrientation);
    }
    if (message.spacing !== 0) {
      writer.uint32(133).float(message.spacing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBUIContainerStack {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBUIContainerStack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        case 3:
          message.opacity = reader.float();
          break;
        case 4:
          message.hAlign = reader.string();
          break;
        case 5:
          message.vAlign = reader.string();
          break;
        case 6:
          message.width = reader.string();
          break;
        case 7:
          message.height = reader.string();
          break;
        case 8:
          message.positionX = reader.string();
          break;
        case 9:
          message.positionY = reader.string();
          break;
        case 10:
          message.isPointerBlocker = reader.bool();
          break;
        case 11:
          message.parent = PBUIShape.decode(reader, reader.uint32());
          break;
        case 12:
          message.adaptWidth = reader.bool();
          break;
        case 13:
          message.adaptHeight = reader.bool();
          break;
        case 14:
          message.color = PBColor4.decode(reader, reader.uint32());
          break;
        case 15:
          message.stackOrientation = reader.int32() as any;
          break;
        case 16:
          message.spacing = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBUIContainerStack {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      opacity: isSet(object.opacity) ? Number(object.opacity) : 0,
      hAlign: isSet(object.hAlign) ? String(object.hAlign) : "",
      vAlign: isSet(object.vAlign) ? String(object.vAlign) : "",
      width: isSet(object.width) ? String(object.width) : "",
      height: isSet(object.height) ? String(object.height) : "",
      positionX: isSet(object.positionX) ? String(object.positionX) : "",
      positionY: isSet(object.positionY) ? String(object.positionY) : "",
      isPointerBlocker: isSet(object.isPointerBlocker) ? Boolean(object.isPointerBlocker) : false,
      parent: isSet(object.parent) ? PBUIShape.fromJSON(object.parent) : undefined,
      adaptWidth: isSet(object.adaptWidth) ? Boolean(object.adaptWidth) : false,
      adaptHeight: isSet(object.adaptHeight) ? Boolean(object.adaptHeight) : false,
      color: isSet(object.color) ? PBColor4.fromJSON(object.color) : undefined,
      stackOrientation: isSet(object.stackOrientation) ? pBUIStackOrientationFromJSON(object.stackOrientation) : 0,
      spacing: isSet(object.spacing) ? Number(object.spacing) : 0,
    };
  },

  toJSON(message: PBUIContainerStack): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.visible !== undefined && (obj.visible = message.visible);
    message.opacity !== undefined && (obj.opacity = message.opacity);
    message.hAlign !== undefined && (obj.hAlign = message.hAlign);
    message.vAlign !== undefined && (obj.vAlign = message.vAlign);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.positionX !== undefined && (obj.positionX = message.positionX);
    message.positionY !== undefined && (obj.positionY = message.positionY);
    message.isPointerBlocker !== undefined && (obj.isPointerBlocker = message.isPointerBlocker);
    message.parent !== undefined && (obj.parent = message.parent ? PBUIShape.toJSON(message.parent) : undefined);
    message.adaptWidth !== undefined && (obj.adaptWidth = message.adaptWidth);
    message.adaptHeight !== undefined && (obj.adaptHeight = message.adaptHeight);
    message.color !== undefined && (obj.color = message.color ? PBColor4.toJSON(message.color) : undefined);
    message.stackOrientation !== undefined &&
      (obj.stackOrientation = pBUIStackOrientationToJSON(message.stackOrientation));
    message.spacing !== undefined && (obj.spacing = message.spacing);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBUIContainerStack>, I>>(object: I): PBUIContainerStack {
    const message = createBasePBUIContainerStack();
    message.name = object.name ?? "";
    message.visible = object.visible ?? false;
    message.opacity = object.opacity ?? 0;
    message.hAlign = object.hAlign ?? "";
    message.vAlign = object.vAlign ?? "";
    message.width = object.width ?? "";
    message.height = object.height ?? "";
    message.positionX = object.positionX ?? "";
    message.positionY = object.positionY ?? "";
    message.isPointerBlocker = object.isPointerBlocker ?? false;
    message.parent = (object.parent !== undefined && object.parent !== null)
      ? PBUIShape.fromPartial(object.parent)
      : undefined;
    message.adaptWidth = object.adaptWidth ?? false;
    message.adaptHeight = object.adaptHeight ?? false;
    message.color = (object.color !== undefined && object.color !== null)
      ? PBColor4.fromPartial(object.color)
      : undefined;
    message.stackOrientation = object.stackOrientation ?? 0;
    message.spacing = object.spacing ?? 0;
    return message;
  },
};

function createBasePBUIImage(): PBUIImage {
  return {
    name: "",
    visible: false,
    opacity: 0,
    hAlign: "",
    vAlign: "",
    width: "",
    height: "",
    positionX: "",
    positionY: "",
    isPointerBlocker: false,
    parent: undefined,
    sourceLeft: 0,
    sourceTop: 0,
    sourceWidth: 0,
    sourceHeight: 0,
    source: undefined,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    sizeInPixels: false,
    onClick: undefined,
  };
}

export const PBUIImage = {
  encode(message: PBUIImage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    if (message.opacity !== 0) {
      writer.uint32(29).float(message.opacity);
    }
    if (message.hAlign !== "") {
      writer.uint32(34).string(message.hAlign);
    }
    if (message.vAlign !== "") {
      writer.uint32(42).string(message.vAlign);
    }
    if (message.width !== "") {
      writer.uint32(50).string(message.width);
    }
    if (message.height !== "") {
      writer.uint32(58).string(message.height);
    }
    if (message.positionX !== "") {
      writer.uint32(66).string(message.positionX);
    }
    if (message.positionY !== "") {
      writer.uint32(74).string(message.positionY);
    }
    if (message.isPointerBlocker === true) {
      writer.uint32(80).bool(message.isPointerBlocker);
    }
    if (message.parent !== undefined) {
      PBUIShape.encode(message.parent, writer.uint32(90).fork()).ldelim();
    }
    if (message.sourceLeft !== 0) {
      writer.uint32(101).float(message.sourceLeft);
    }
    if (message.sourceTop !== 0) {
      writer.uint32(109).float(message.sourceTop);
    }
    if (message.sourceWidth !== 0) {
      writer.uint32(117).float(message.sourceWidth);
    }
    if (message.sourceHeight !== 0) {
      writer.uint32(125).float(message.sourceHeight);
    }
    if (message.source !== undefined) {
      PBTexture.encode(message.source, writer.uint32(130).fork()).ldelim();
    }
    if (message.paddingTop !== 0) {
      writer.uint32(141).float(message.paddingTop);
    }
    if (message.paddingRight !== 0) {
      writer.uint32(149).float(message.paddingRight);
    }
    if (message.paddingBottom !== 0) {
      writer.uint32(157).float(message.paddingBottom);
    }
    if (message.paddingLeft !== 0) {
      writer.uint32(165).float(message.paddingLeft);
    }
    if (message.sizeInPixels === true) {
      writer.uint32(168).bool(message.sizeInPixels);
    }
    if (message.onClick !== undefined) {
      PBUUIDCallback.encode(message.onClick, writer.uint32(178).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBUIImage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBUIImage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        case 3:
          message.opacity = reader.float();
          break;
        case 4:
          message.hAlign = reader.string();
          break;
        case 5:
          message.vAlign = reader.string();
          break;
        case 6:
          message.width = reader.string();
          break;
        case 7:
          message.height = reader.string();
          break;
        case 8:
          message.positionX = reader.string();
          break;
        case 9:
          message.positionY = reader.string();
          break;
        case 10:
          message.isPointerBlocker = reader.bool();
          break;
        case 11:
          message.parent = PBUIShape.decode(reader, reader.uint32());
          break;
        case 12:
          message.sourceLeft = reader.float();
          break;
        case 13:
          message.sourceTop = reader.float();
          break;
        case 14:
          message.sourceWidth = reader.float();
          break;
        case 15:
          message.sourceHeight = reader.float();
          break;
        case 16:
          message.source = PBTexture.decode(reader, reader.uint32());
          break;
        case 17:
          message.paddingTop = reader.float();
          break;
        case 18:
          message.paddingRight = reader.float();
          break;
        case 19:
          message.paddingBottom = reader.float();
          break;
        case 20:
          message.paddingLeft = reader.float();
          break;
        case 21:
          message.sizeInPixels = reader.bool();
          break;
        case 22:
          message.onClick = PBUUIDCallback.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBUIImage {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      opacity: isSet(object.opacity) ? Number(object.opacity) : 0,
      hAlign: isSet(object.hAlign) ? String(object.hAlign) : "",
      vAlign: isSet(object.vAlign) ? String(object.vAlign) : "",
      width: isSet(object.width) ? String(object.width) : "",
      height: isSet(object.height) ? String(object.height) : "",
      positionX: isSet(object.positionX) ? String(object.positionX) : "",
      positionY: isSet(object.positionY) ? String(object.positionY) : "",
      isPointerBlocker: isSet(object.isPointerBlocker) ? Boolean(object.isPointerBlocker) : false,
      parent: isSet(object.parent) ? PBUIShape.fromJSON(object.parent) : undefined,
      sourceLeft: isSet(object.sourceLeft) ? Number(object.sourceLeft) : 0,
      sourceTop: isSet(object.sourceTop) ? Number(object.sourceTop) : 0,
      sourceWidth: isSet(object.sourceWidth) ? Number(object.sourceWidth) : 0,
      sourceHeight: isSet(object.sourceHeight) ? Number(object.sourceHeight) : 0,
      source: isSet(object.source) ? PBTexture.fromJSON(object.source) : undefined,
      paddingTop: isSet(object.paddingTop) ? Number(object.paddingTop) : 0,
      paddingRight: isSet(object.paddingRight) ? Number(object.paddingRight) : 0,
      paddingBottom: isSet(object.paddingBottom) ? Number(object.paddingBottom) : 0,
      paddingLeft: isSet(object.paddingLeft) ? Number(object.paddingLeft) : 0,
      sizeInPixels: isSet(object.sizeInPixels) ? Boolean(object.sizeInPixels) : false,
      onClick: isSet(object.onClick) ? PBUUIDCallback.fromJSON(object.onClick) : undefined,
    };
  },

  toJSON(message: PBUIImage): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.visible !== undefined && (obj.visible = message.visible);
    message.opacity !== undefined && (obj.opacity = message.opacity);
    message.hAlign !== undefined && (obj.hAlign = message.hAlign);
    message.vAlign !== undefined && (obj.vAlign = message.vAlign);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.positionX !== undefined && (obj.positionX = message.positionX);
    message.positionY !== undefined && (obj.positionY = message.positionY);
    message.isPointerBlocker !== undefined && (obj.isPointerBlocker = message.isPointerBlocker);
    message.parent !== undefined && (obj.parent = message.parent ? PBUIShape.toJSON(message.parent) : undefined);
    message.sourceLeft !== undefined && (obj.sourceLeft = message.sourceLeft);
    message.sourceTop !== undefined && (obj.sourceTop = message.sourceTop);
    message.sourceWidth !== undefined && (obj.sourceWidth = message.sourceWidth);
    message.sourceHeight !== undefined && (obj.sourceHeight = message.sourceHeight);
    message.source !== undefined && (obj.source = message.source ? PBTexture.toJSON(message.source) : undefined);
    message.paddingTop !== undefined && (obj.paddingTop = message.paddingTop);
    message.paddingRight !== undefined && (obj.paddingRight = message.paddingRight);
    message.paddingBottom !== undefined && (obj.paddingBottom = message.paddingBottom);
    message.paddingLeft !== undefined && (obj.paddingLeft = message.paddingLeft);
    message.sizeInPixels !== undefined && (obj.sizeInPixels = message.sizeInPixels);
    message.onClick !== undefined &&
      (obj.onClick = message.onClick ? PBUUIDCallback.toJSON(message.onClick) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBUIImage>, I>>(object: I): PBUIImage {
    const message = createBasePBUIImage();
    message.name = object.name ?? "";
    message.visible = object.visible ?? false;
    message.opacity = object.opacity ?? 0;
    message.hAlign = object.hAlign ?? "";
    message.vAlign = object.vAlign ?? "";
    message.width = object.width ?? "";
    message.height = object.height ?? "";
    message.positionX = object.positionX ?? "";
    message.positionY = object.positionY ?? "";
    message.isPointerBlocker = object.isPointerBlocker ?? false;
    message.parent = (object.parent !== undefined && object.parent !== null)
      ? PBUIShape.fromPartial(object.parent)
      : undefined;
    message.sourceLeft = object.sourceLeft ?? 0;
    message.sourceTop = object.sourceTop ?? 0;
    message.sourceWidth = object.sourceWidth ?? 0;
    message.sourceHeight = object.sourceHeight ?? 0;
    message.source = (object.source !== undefined && object.source !== null)
      ? PBTexture.fromPartial(object.source)
      : undefined;
    message.paddingTop = object.paddingTop ?? 0;
    message.paddingRight = object.paddingRight ?? 0;
    message.paddingBottom = object.paddingBottom ?? 0;
    message.paddingLeft = object.paddingLeft ?? 0;
    message.sizeInPixels = object.sizeInPixels ?? false;
    message.onClick = (object.onClick !== undefined && object.onClick !== null)
      ? PBUUIDCallback.fromPartial(object.onClick)
      : undefined;
    return message;
  },
};

function createBasePBUUIDCallback(): PBUUIDCallback {
  return { type: "", uuid: "" };
}

export const PBUUIDCallback = {
  encode(message: PBUUIDCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBUUIDCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBUUIDCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBUUIDCallback {
    return { type: isSet(object.type) ? String(object.type) : "", uuid: isSet(object.uuid) ? String(object.uuid) : "" };
  },

  toJSON(message: PBUUIDCallback): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBUUIDCallback>, I>>(object: I): PBUUIDCallback {
    const message = createBasePBUUIDCallback();
    message.type = object.type ?? "";
    message.uuid = object.uuid ?? "";
    return message;
  },
};

function createBasePBUIInputText(): PBUIInputText {
  return {
    name: "",
    visible: false,
    opacity: 0,
    hAlign: "",
    vAlign: "",
    width: "",
    height: "",
    positionX: "",
    positionY: "",
    isPointerBlocker: false,
    parent: undefined,
    outlineWidth: 0,
    outlineColor: undefined,
    color: undefined,
    thickness: 0,
    fontSize: 0,
    fontWeight: "",
    value: "",
    placeholderColor: undefined,
    placeholder: "",
    margin: 0,
    maxWidth: 0,
    hTextAlign: "",
    vTextAlign: "",
    autoStretchWidth: false,
    background: undefined,
    focusedBackground: undefined,
    textWrapping: false,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: undefined,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    onTextSubmit: undefined,
    onChanged: undefined,
    onFocus: undefined,
    onBlur: undefined,
  };
}

export const PBUIInputText = {
  encode(message: PBUIInputText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    if (message.opacity !== 0) {
      writer.uint32(29).float(message.opacity);
    }
    if (message.hAlign !== "") {
      writer.uint32(34).string(message.hAlign);
    }
    if (message.vAlign !== "") {
      writer.uint32(42).string(message.vAlign);
    }
    if (message.width !== "") {
      writer.uint32(50).string(message.width);
    }
    if (message.height !== "") {
      writer.uint32(58).string(message.height);
    }
    if (message.positionX !== "") {
      writer.uint32(66).string(message.positionX);
    }
    if (message.positionY !== "") {
      writer.uint32(74).string(message.positionY);
    }
    if (message.isPointerBlocker === true) {
      writer.uint32(80).bool(message.isPointerBlocker);
    }
    if (message.parent !== undefined) {
      PBUIShape.encode(message.parent, writer.uint32(90).fork()).ldelim();
    }
    if (message.outlineWidth !== 0) {
      writer.uint32(101).float(message.outlineWidth);
    }
    if (message.outlineColor !== undefined) {
      PBColor4.encode(message.outlineColor, writer.uint32(106).fork()).ldelim();
    }
    if (message.color !== undefined) {
      PBColor4.encode(message.color, writer.uint32(114).fork()).ldelim();
    }
    if (message.thickness !== 0) {
      writer.uint32(125).float(message.thickness);
    }
    if (message.fontSize !== 0) {
      writer.uint32(133).float(message.fontSize);
    }
    if (message.fontWeight !== "") {
      writer.uint32(138).string(message.fontWeight);
    }
    if (message.value !== "") {
      writer.uint32(146).string(message.value);
    }
    if (message.placeholderColor !== undefined) {
      PBColor4.encode(message.placeholderColor, writer.uint32(154).fork()).ldelim();
    }
    if (message.placeholder !== "") {
      writer.uint32(162).string(message.placeholder);
    }
    if (message.margin !== 0) {
      writer.uint32(173).float(message.margin);
    }
    if (message.maxWidth !== 0) {
      writer.uint32(181).float(message.maxWidth);
    }
    if (message.hTextAlign !== "") {
      writer.uint32(186).string(message.hTextAlign);
    }
    if (message.vTextAlign !== "") {
      writer.uint32(194).string(message.vTextAlign);
    }
    if (message.autoStretchWidth === true) {
      writer.uint32(200).bool(message.autoStretchWidth);
    }
    if (message.background !== undefined) {
      PBColor4.encode(message.background, writer.uint32(210).fork()).ldelim();
    }
    if (message.focusedBackground !== undefined) {
      PBColor4.encode(message.focusedBackground, writer.uint32(218).fork()).ldelim();
    }
    if (message.textWrapping === true) {
      writer.uint32(224).bool(message.textWrapping);
    }
    if (message.shadowBlur !== 0) {
      writer.uint32(237).float(message.shadowBlur);
    }
    if (message.shadowOffsetX !== 0) {
      writer.uint32(245).float(message.shadowOffsetX);
    }
    if (message.shadowOffsetY !== 0) {
      writer.uint32(253).float(message.shadowOffsetY);
    }
    if (message.shadowColor !== undefined) {
      PBColor4.encode(message.shadowColor, writer.uint32(258).fork()).ldelim();
    }
    if (message.paddingTop !== 0) {
      writer.uint32(269).float(message.paddingTop);
    }
    if (message.paddingRight !== 0) {
      writer.uint32(277).float(message.paddingRight);
    }
    if (message.paddingBottom !== 0) {
      writer.uint32(285).float(message.paddingBottom);
    }
    if (message.paddingLeft !== 0) {
      writer.uint32(293).float(message.paddingLeft);
    }
    if (message.onTextSubmit !== undefined) {
      PBUUIDCallback.encode(message.onTextSubmit, writer.uint32(298).fork()).ldelim();
    }
    if (message.onChanged !== undefined) {
      PBUUIDCallback.encode(message.onChanged, writer.uint32(306).fork()).ldelim();
    }
    if (message.onFocus !== undefined) {
      PBUUIDCallback.encode(message.onFocus, writer.uint32(314).fork()).ldelim();
    }
    if (message.onBlur !== undefined) {
      PBUUIDCallback.encode(message.onBlur, writer.uint32(322).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBUIInputText {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBUIInputText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        case 3:
          message.opacity = reader.float();
          break;
        case 4:
          message.hAlign = reader.string();
          break;
        case 5:
          message.vAlign = reader.string();
          break;
        case 6:
          message.width = reader.string();
          break;
        case 7:
          message.height = reader.string();
          break;
        case 8:
          message.positionX = reader.string();
          break;
        case 9:
          message.positionY = reader.string();
          break;
        case 10:
          message.isPointerBlocker = reader.bool();
          break;
        case 11:
          message.parent = PBUIShape.decode(reader, reader.uint32());
          break;
        case 12:
          message.outlineWidth = reader.float();
          break;
        case 13:
          message.outlineColor = PBColor4.decode(reader, reader.uint32());
          break;
        case 14:
          message.color = PBColor4.decode(reader, reader.uint32());
          break;
        case 15:
          message.thickness = reader.float();
          break;
        case 16:
          message.fontSize = reader.float();
          break;
        case 17:
          message.fontWeight = reader.string();
          break;
        case 18:
          message.value = reader.string();
          break;
        case 19:
          message.placeholderColor = PBColor4.decode(reader, reader.uint32());
          break;
        case 20:
          message.placeholder = reader.string();
          break;
        case 21:
          message.margin = reader.float();
          break;
        case 22:
          message.maxWidth = reader.float();
          break;
        case 23:
          message.hTextAlign = reader.string();
          break;
        case 24:
          message.vTextAlign = reader.string();
          break;
        case 25:
          message.autoStretchWidth = reader.bool();
          break;
        case 26:
          message.background = PBColor4.decode(reader, reader.uint32());
          break;
        case 27:
          message.focusedBackground = PBColor4.decode(reader, reader.uint32());
          break;
        case 28:
          message.textWrapping = reader.bool();
          break;
        case 29:
          message.shadowBlur = reader.float();
          break;
        case 30:
          message.shadowOffsetX = reader.float();
          break;
        case 31:
          message.shadowOffsetY = reader.float();
          break;
        case 32:
          message.shadowColor = PBColor4.decode(reader, reader.uint32());
          break;
        case 33:
          message.paddingTop = reader.float();
          break;
        case 34:
          message.paddingRight = reader.float();
          break;
        case 35:
          message.paddingBottom = reader.float();
          break;
        case 36:
          message.paddingLeft = reader.float();
          break;
        case 37:
          message.onTextSubmit = PBUUIDCallback.decode(reader, reader.uint32());
          break;
        case 38:
          message.onChanged = PBUUIDCallback.decode(reader, reader.uint32());
          break;
        case 39:
          message.onFocus = PBUUIDCallback.decode(reader, reader.uint32());
          break;
        case 40:
          message.onBlur = PBUUIDCallback.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBUIInputText {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      opacity: isSet(object.opacity) ? Number(object.opacity) : 0,
      hAlign: isSet(object.hAlign) ? String(object.hAlign) : "",
      vAlign: isSet(object.vAlign) ? String(object.vAlign) : "",
      width: isSet(object.width) ? String(object.width) : "",
      height: isSet(object.height) ? String(object.height) : "",
      positionX: isSet(object.positionX) ? String(object.positionX) : "",
      positionY: isSet(object.positionY) ? String(object.positionY) : "",
      isPointerBlocker: isSet(object.isPointerBlocker) ? Boolean(object.isPointerBlocker) : false,
      parent: isSet(object.parent) ? PBUIShape.fromJSON(object.parent) : undefined,
      outlineWidth: isSet(object.outlineWidth) ? Number(object.outlineWidth) : 0,
      outlineColor: isSet(object.outlineColor) ? PBColor4.fromJSON(object.outlineColor) : undefined,
      color: isSet(object.color) ? PBColor4.fromJSON(object.color) : undefined,
      thickness: isSet(object.thickness) ? Number(object.thickness) : 0,
      fontSize: isSet(object.fontSize) ? Number(object.fontSize) : 0,
      fontWeight: isSet(object.fontWeight) ? String(object.fontWeight) : "",
      value: isSet(object.value) ? String(object.value) : "",
      placeholderColor: isSet(object.placeholderColor) ? PBColor4.fromJSON(object.placeholderColor) : undefined,
      placeholder: isSet(object.placeholder) ? String(object.placeholder) : "",
      margin: isSet(object.margin) ? Number(object.margin) : 0,
      maxWidth: isSet(object.maxWidth) ? Number(object.maxWidth) : 0,
      hTextAlign: isSet(object.hTextAlign) ? String(object.hTextAlign) : "",
      vTextAlign: isSet(object.vTextAlign) ? String(object.vTextAlign) : "",
      autoStretchWidth: isSet(object.autoStretchWidth) ? Boolean(object.autoStretchWidth) : false,
      background: isSet(object.background) ? PBColor4.fromJSON(object.background) : undefined,
      focusedBackground: isSet(object.focusedBackground) ? PBColor4.fromJSON(object.focusedBackground) : undefined,
      textWrapping: isSet(object.textWrapping) ? Boolean(object.textWrapping) : false,
      shadowBlur: isSet(object.shadowBlur) ? Number(object.shadowBlur) : 0,
      shadowOffsetX: isSet(object.shadowOffsetX) ? Number(object.shadowOffsetX) : 0,
      shadowOffsetY: isSet(object.shadowOffsetY) ? Number(object.shadowOffsetY) : 0,
      shadowColor: isSet(object.shadowColor) ? PBColor4.fromJSON(object.shadowColor) : undefined,
      paddingTop: isSet(object.paddingTop) ? Number(object.paddingTop) : 0,
      paddingRight: isSet(object.paddingRight) ? Number(object.paddingRight) : 0,
      paddingBottom: isSet(object.paddingBottom) ? Number(object.paddingBottom) : 0,
      paddingLeft: isSet(object.paddingLeft) ? Number(object.paddingLeft) : 0,
      onTextSubmit: isSet(object.onTextSubmit) ? PBUUIDCallback.fromJSON(object.onTextSubmit) : undefined,
      onChanged: isSet(object.onChanged) ? PBUUIDCallback.fromJSON(object.onChanged) : undefined,
      onFocus: isSet(object.onFocus) ? PBUUIDCallback.fromJSON(object.onFocus) : undefined,
      onBlur: isSet(object.onBlur) ? PBUUIDCallback.fromJSON(object.onBlur) : undefined,
    };
  },

  toJSON(message: PBUIInputText): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.visible !== undefined && (obj.visible = message.visible);
    message.opacity !== undefined && (obj.opacity = message.opacity);
    message.hAlign !== undefined && (obj.hAlign = message.hAlign);
    message.vAlign !== undefined && (obj.vAlign = message.vAlign);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.positionX !== undefined && (obj.positionX = message.positionX);
    message.positionY !== undefined && (obj.positionY = message.positionY);
    message.isPointerBlocker !== undefined && (obj.isPointerBlocker = message.isPointerBlocker);
    message.parent !== undefined && (obj.parent = message.parent ? PBUIShape.toJSON(message.parent) : undefined);
    message.outlineWidth !== undefined && (obj.outlineWidth = message.outlineWidth);
    message.outlineColor !== undefined &&
      (obj.outlineColor = message.outlineColor ? PBColor4.toJSON(message.outlineColor) : undefined);
    message.color !== undefined && (obj.color = message.color ? PBColor4.toJSON(message.color) : undefined);
    message.thickness !== undefined && (obj.thickness = message.thickness);
    message.fontSize !== undefined && (obj.fontSize = message.fontSize);
    message.fontWeight !== undefined && (obj.fontWeight = message.fontWeight);
    message.value !== undefined && (obj.value = message.value);
    message.placeholderColor !== undefined &&
      (obj.placeholderColor = message.placeholderColor ? PBColor4.toJSON(message.placeholderColor) : undefined);
    message.placeholder !== undefined && (obj.placeholder = message.placeholder);
    message.margin !== undefined && (obj.margin = message.margin);
    message.maxWidth !== undefined && (obj.maxWidth = message.maxWidth);
    message.hTextAlign !== undefined && (obj.hTextAlign = message.hTextAlign);
    message.vTextAlign !== undefined && (obj.vTextAlign = message.vTextAlign);
    message.autoStretchWidth !== undefined && (obj.autoStretchWidth = message.autoStretchWidth);
    message.background !== undefined &&
      (obj.background = message.background ? PBColor4.toJSON(message.background) : undefined);
    message.focusedBackground !== undefined &&
      (obj.focusedBackground = message.focusedBackground ? PBColor4.toJSON(message.focusedBackground) : undefined);
    message.textWrapping !== undefined && (obj.textWrapping = message.textWrapping);
    message.shadowBlur !== undefined && (obj.shadowBlur = message.shadowBlur);
    message.shadowOffsetX !== undefined && (obj.shadowOffsetX = message.shadowOffsetX);
    message.shadowOffsetY !== undefined && (obj.shadowOffsetY = message.shadowOffsetY);
    message.shadowColor !== undefined &&
      (obj.shadowColor = message.shadowColor ? PBColor4.toJSON(message.shadowColor) : undefined);
    message.paddingTop !== undefined && (obj.paddingTop = message.paddingTop);
    message.paddingRight !== undefined && (obj.paddingRight = message.paddingRight);
    message.paddingBottom !== undefined && (obj.paddingBottom = message.paddingBottom);
    message.paddingLeft !== undefined && (obj.paddingLeft = message.paddingLeft);
    message.onTextSubmit !== undefined &&
      (obj.onTextSubmit = message.onTextSubmit ? PBUUIDCallback.toJSON(message.onTextSubmit) : undefined);
    message.onChanged !== undefined &&
      (obj.onChanged = message.onChanged ? PBUUIDCallback.toJSON(message.onChanged) : undefined);
    message.onFocus !== undefined &&
      (obj.onFocus = message.onFocus ? PBUUIDCallback.toJSON(message.onFocus) : undefined);
    message.onBlur !== undefined && (obj.onBlur = message.onBlur ? PBUUIDCallback.toJSON(message.onBlur) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBUIInputText>, I>>(object: I): PBUIInputText {
    const message = createBasePBUIInputText();
    message.name = object.name ?? "";
    message.visible = object.visible ?? false;
    message.opacity = object.opacity ?? 0;
    message.hAlign = object.hAlign ?? "";
    message.vAlign = object.vAlign ?? "";
    message.width = object.width ?? "";
    message.height = object.height ?? "";
    message.positionX = object.positionX ?? "";
    message.positionY = object.positionY ?? "";
    message.isPointerBlocker = object.isPointerBlocker ?? false;
    message.parent = (object.parent !== undefined && object.parent !== null)
      ? PBUIShape.fromPartial(object.parent)
      : undefined;
    message.outlineWidth = object.outlineWidth ?? 0;
    message.outlineColor = (object.outlineColor !== undefined && object.outlineColor !== null)
      ? PBColor4.fromPartial(object.outlineColor)
      : undefined;
    message.color = (object.color !== undefined && object.color !== null)
      ? PBColor4.fromPartial(object.color)
      : undefined;
    message.thickness = object.thickness ?? 0;
    message.fontSize = object.fontSize ?? 0;
    message.fontWeight = object.fontWeight ?? "";
    message.value = object.value ?? "";
    message.placeholderColor = (object.placeholderColor !== undefined && object.placeholderColor !== null)
      ? PBColor4.fromPartial(object.placeholderColor)
      : undefined;
    message.placeholder = object.placeholder ?? "";
    message.margin = object.margin ?? 0;
    message.maxWidth = object.maxWidth ?? 0;
    message.hTextAlign = object.hTextAlign ?? "";
    message.vTextAlign = object.vTextAlign ?? "";
    message.autoStretchWidth = object.autoStretchWidth ?? false;
    message.background = (object.background !== undefined && object.background !== null)
      ? PBColor4.fromPartial(object.background)
      : undefined;
    message.focusedBackground = (object.focusedBackground !== undefined && object.focusedBackground !== null)
      ? PBColor4.fromPartial(object.focusedBackground)
      : undefined;
    message.textWrapping = object.textWrapping ?? false;
    message.shadowBlur = object.shadowBlur ?? 0;
    message.shadowOffsetX = object.shadowOffsetX ?? 0;
    message.shadowOffsetY = object.shadowOffsetY ?? 0;
    message.shadowColor = (object.shadowColor !== undefined && object.shadowColor !== null)
      ? PBColor4.fromPartial(object.shadowColor)
      : undefined;
    message.paddingTop = object.paddingTop ?? 0;
    message.paddingRight = object.paddingRight ?? 0;
    message.paddingBottom = object.paddingBottom ?? 0;
    message.paddingLeft = object.paddingLeft ?? 0;
    message.onTextSubmit = (object.onTextSubmit !== undefined && object.onTextSubmit !== null)
      ? PBUUIDCallback.fromPartial(object.onTextSubmit)
      : undefined;
    message.onChanged = (object.onChanged !== undefined && object.onChanged !== null)
      ? PBUUIDCallback.fromPartial(object.onChanged)
      : undefined;
    message.onFocus = (object.onFocus !== undefined && object.onFocus !== null)
      ? PBUUIDCallback.fromPartial(object.onFocus)
      : undefined;
    message.onBlur = (object.onBlur !== undefined && object.onBlur !== null)
      ? PBUUIDCallback.fromPartial(object.onBlur)
      : undefined;
    return message;
  },
};

function createBasePBUIScrollRect(): PBUIScrollRect {
  return {
    name: "",
    visible: false,
    opacity: 0,
    hAlign: "",
    vAlign: "",
    width: "",
    height: "",
    positionX: "",
    positionY: "",
    isPointerBlocker: false,
    parent: undefined,
    valueX: 0,
    valueY: 0,
    borderColor: undefined,
    backgroundColor: undefined,
    isHorizontal: false,
    isVertical: false,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    onChanged: undefined,
  };
}

export const PBUIScrollRect = {
  encode(message: PBUIScrollRect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    if (message.opacity !== 0) {
      writer.uint32(29).float(message.opacity);
    }
    if (message.hAlign !== "") {
      writer.uint32(34).string(message.hAlign);
    }
    if (message.vAlign !== "") {
      writer.uint32(42).string(message.vAlign);
    }
    if (message.width !== "") {
      writer.uint32(50).string(message.width);
    }
    if (message.height !== "") {
      writer.uint32(58).string(message.height);
    }
    if (message.positionX !== "") {
      writer.uint32(66).string(message.positionX);
    }
    if (message.positionY !== "") {
      writer.uint32(74).string(message.positionY);
    }
    if (message.isPointerBlocker === true) {
      writer.uint32(80).bool(message.isPointerBlocker);
    }
    if (message.parent !== undefined) {
      PBUIShape.encode(message.parent, writer.uint32(90).fork()).ldelim();
    }
    if (message.valueX !== 0) {
      writer.uint32(101).float(message.valueX);
    }
    if (message.valueY !== 0) {
      writer.uint32(109).float(message.valueY);
    }
    if (message.borderColor !== undefined) {
      PBColor4.encode(message.borderColor, writer.uint32(114).fork()).ldelim();
    }
    if (message.backgroundColor !== undefined) {
      PBColor4.encode(message.backgroundColor, writer.uint32(122).fork()).ldelim();
    }
    if (message.isHorizontal === true) {
      writer.uint32(128).bool(message.isHorizontal);
    }
    if (message.isVertical === true) {
      writer.uint32(136).bool(message.isVertical);
    }
    if (message.paddingTop !== 0) {
      writer.uint32(149).float(message.paddingTop);
    }
    if (message.paddingRight !== 0) {
      writer.uint32(157).float(message.paddingRight);
    }
    if (message.paddingBottom !== 0) {
      writer.uint32(165).float(message.paddingBottom);
    }
    if (message.paddingLeft !== 0) {
      writer.uint32(173).float(message.paddingLeft);
    }
    if (message.onChanged !== undefined) {
      PBUUIDCallback.encode(message.onChanged, writer.uint32(178).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBUIScrollRect {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBUIScrollRect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        case 3:
          message.opacity = reader.float();
          break;
        case 4:
          message.hAlign = reader.string();
          break;
        case 5:
          message.vAlign = reader.string();
          break;
        case 6:
          message.width = reader.string();
          break;
        case 7:
          message.height = reader.string();
          break;
        case 8:
          message.positionX = reader.string();
          break;
        case 9:
          message.positionY = reader.string();
          break;
        case 10:
          message.isPointerBlocker = reader.bool();
          break;
        case 11:
          message.parent = PBUIShape.decode(reader, reader.uint32());
          break;
        case 12:
          message.valueX = reader.float();
          break;
        case 13:
          message.valueY = reader.float();
          break;
        case 14:
          message.borderColor = PBColor4.decode(reader, reader.uint32());
          break;
        case 15:
          message.backgroundColor = PBColor4.decode(reader, reader.uint32());
          break;
        case 16:
          message.isHorizontal = reader.bool();
          break;
        case 17:
          message.isVertical = reader.bool();
          break;
        case 18:
          message.paddingTop = reader.float();
          break;
        case 19:
          message.paddingRight = reader.float();
          break;
        case 20:
          message.paddingBottom = reader.float();
          break;
        case 21:
          message.paddingLeft = reader.float();
          break;
        case 22:
          message.onChanged = PBUUIDCallback.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBUIScrollRect {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      opacity: isSet(object.opacity) ? Number(object.opacity) : 0,
      hAlign: isSet(object.hAlign) ? String(object.hAlign) : "",
      vAlign: isSet(object.vAlign) ? String(object.vAlign) : "",
      width: isSet(object.width) ? String(object.width) : "",
      height: isSet(object.height) ? String(object.height) : "",
      positionX: isSet(object.positionX) ? String(object.positionX) : "",
      positionY: isSet(object.positionY) ? String(object.positionY) : "",
      isPointerBlocker: isSet(object.isPointerBlocker) ? Boolean(object.isPointerBlocker) : false,
      parent: isSet(object.parent) ? PBUIShape.fromJSON(object.parent) : undefined,
      valueX: isSet(object.valueX) ? Number(object.valueX) : 0,
      valueY: isSet(object.valueY) ? Number(object.valueY) : 0,
      borderColor: isSet(object.borderColor) ? PBColor4.fromJSON(object.borderColor) : undefined,
      backgroundColor: isSet(object.backgroundColor) ? PBColor4.fromJSON(object.backgroundColor) : undefined,
      isHorizontal: isSet(object.isHorizontal) ? Boolean(object.isHorizontal) : false,
      isVertical: isSet(object.isVertical) ? Boolean(object.isVertical) : false,
      paddingTop: isSet(object.paddingTop) ? Number(object.paddingTop) : 0,
      paddingRight: isSet(object.paddingRight) ? Number(object.paddingRight) : 0,
      paddingBottom: isSet(object.paddingBottom) ? Number(object.paddingBottom) : 0,
      paddingLeft: isSet(object.paddingLeft) ? Number(object.paddingLeft) : 0,
      onChanged: isSet(object.onChanged) ? PBUUIDCallback.fromJSON(object.onChanged) : undefined,
    };
  },

  toJSON(message: PBUIScrollRect): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.visible !== undefined && (obj.visible = message.visible);
    message.opacity !== undefined && (obj.opacity = message.opacity);
    message.hAlign !== undefined && (obj.hAlign = message.hAlign);
    message.vAlign !== undefined && (obj.vAlign = message.vAlign);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.positionX !== undefined && (obj.positionX = message.positionX);
    message.positionY !== undefined && (obj.positionY = message.positionY);
    message.isPointerBlocker !== undefined && (obj.isPointerBlocker = message.isPointerBlocker);
    message.parent !== undefined && (obj.parent = message.parent ? PBUIShape.toJSON(message.parent) : undefined);
    message.valueX !== undefined && (obj.valueX = message.valueX);
    message.valueY !== undefined && (obj.valueY = message.valueY);
    message.borderColor !== undefined &&
      (obj.borderColor = message.borderColor ? PBColor4.toJSON(message.borderColor) : undefined);
    message.backgroundColor !== undefined &&
      (obj.backgroundColor = message.backgroundColor ? PBColor4.toJSON(message.backgroundColor) : undefined);
    message.isHorizontal !== undefined && (obj.isHorizontal = message.isHorizontal);
    message.isVertical !== undefined && (obj.isVertical = message.isVertical);
    message.paddingTop !== undefined && (obj.paddingTop = message.paddingTop);
    message.paddingRight !== undefined && (obj.paddingRight = message.paddingRight);
    message.paddingBottom !== undefined && (obj.paddingBottom = message.paddingBottom);
    message.paddingLeft !== undefined && (obj.paddingLeft = message.paddingLeft);
    message.onChanged !== undefined &&
      (obj.onChanged = message.onChanged ? PBUUIDCallback.toJSON(message.onChanged) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBUIScrollRect>, I>>(object: I): PBUIScrollRect {
    const message = createBasePBUIScrollRect();
    message.name = object.name ?? "";
    message.visible = object.visible ?? false;
    message.opacity = object.opacity ?? 0;
    message.hAlign = object.hAlign ?? "";
    message.vAlign = object.vAlign ?? "";
    message.width = object.width ?? "";
    message.height = object.height ?? "";
    message.positionX = object.positionX ?? "";
    message.positionY = object.positionY ?? "";
    message.isPointerBlocker = object.isPointerBlocker ?? false;
    message.parent = (object.parent !== undefined && object.parent !== null)
      ? PBUIShape.fromPartial(object.parent)
      : undefined;
    message.valueX = object.valueX ?? 0;
    message.valueY = object.valueY ?? 0;
    message.borderColor = (object.borderColor !== undefined && object.borderColor !== null)
      ? PBColor4.fromPartial(object.borderColor)
      : undefined;
    message.backgroundColor = (object.backgroundColor !== undefined && object.backgroundColor !== null)
      ? PBColor4.fromPartial(object.backgroundColor)
      : undefined;
    message.isHorizontal = object.isHorizontal ?? false;
    message.isVertical = object.isVertical ?? false;
    message.paddingTop = object.paddingTop ?? 0;
    message.paddingRight = object.paddingRight ?? 0;
    message.paddingBottom = object.paddingBottom ?? 0;
    message.paddingLeft = object.paddingLeft ?? 0;
    message.onChanged = (object.onChanged !== undefined && object.onChanged !== null)
      ? PBUUIDCallback.fromPartial(object.onChanged)
      : undefined;
    return message;
  },
};

function createBasePBUIShape(): PBUIShape {
  return {
    name: "",
    visible: false,
    opacity: 0,
    hAlign: "",
    vAlign: "",
    width: "",
    height: "",
    positionX: "",
    positionY: "",
    isPointerBlocker: false,
    parent: undefined,
  };
}

export const PBUIShape = {
  encode(message: PBUIShape, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    if (message.opacity !== 0) {
      writer.uint32(29).float(message.opacity);
    }
    if (message.hAlign !== "") {
      writer.uint32(34).string(message.hAlign);
    }
    if (message.vAlign !== "") {
      writer.uint32(42).string(message.vAlign);
    }
    if (message.width !== "") {
      writer.uint32(50).string(message.width);
    }
    if (message.height !== "") {
      writer.uint32(58).string(message.height);
    }
    if (message.positionX !== "") {
      writer.uint32(66).string(message.positionX);
    }
    if (message.positionY !== "") {
      writer.uint32(74).string(message.positionY);
    }
    if (message.isPointerBlocker === true) {
      writer.uint32(80).bool(message.isPointerBlocker);
    }
    if (message.parent !== undefined) {
      PBUIShape.encode(message.parent, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBUIShape {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBUIShape();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        case 3:
          message.opacity = reader.float();
          break;
        case 4:
          message.hAlign = reader.string();
          break;
        case 5:
          message.vAlign = reader.string();
          break;
        case 6:
          message.width = reader.string();
          break;
        case 7:
          message.height = reader.string();
          break;
        case 8:
          message.positionX = reader.string();
          break;
        case 9:
          message.positionY = reader.string();
          break;
        case 10:
          message.isPointerBlocker = reader.bool();
          break;
        case 11:
          message.parent = PBUIShape.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBUIShape {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      opacity: isSet(object.opacity) ? Number(object.opacity) : 0,
      hAlign: isSet(object.hAlign) ? String(object.hAlign) : "",
      vAlign: isSet(object.vAlign) ? String(object.vAlign) : "",
      width: isSet(object.width) ? String(object.width) : "",
      height: isSet(object.height) ? String(object.height) : "",
      positionX: isSet(object.positionX) ? String(object.positionX) : "",
      positionY: isSet(object.positionY) ? String(object.positionY) : "",
      isPointerBlocker: isSet(object.isPointerBlocker) ? Boolean(object.isPointerBlocker) : false,
      parent: isSet(object.parent) ? PBUIShape.fromJSON(object.parent) : undefined,
    };
  },

  toJSON(message: PBUIShape): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.visible !== undefined && (obj.visible = message.visible);
    message.opacity !== undefined && (obj.opacity = message.opacity);
    message.hAlign !== undefined && (obj.hAlign = message.hAlign);
    message.vAlign !== undefined && (obj.vAlign = message.vAlign);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.positionX !== undefined && (obj.positionX = message.positionX);
    message.positionY !== undefined && (obj.positionY = message.positionY);
    message.isPointerBlocker !== undefined && (obj.isPointerBlocker = message.isPointerBlocker);
    message.parent !== undefined && (obj.parent = message.parent ? PBUIShape.toJSON(message.parent) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBUIShape>, I>>(object: I): PBUIShape {
    const message = createBasePBUIShape();
    message.name = object.name ?? "";
    message.visible = object.visible ?? false;
    message.opacity = object.opacity ?? 0;
    message.hAlign = object.hAlign ?? "";
    message.vAlign = object.vAlign ?? "";
    message.width = object.width ?? "";
    message.height = object.height ?? "";
    message.positionX = object.positionX ?? "";
    message.positionY = object.positionY ?? "";
    message.isPointerBlocker = object.isPointerBlocker ?? false;
    message.parent = (object.parent !== undefined && object.parent !== null)
      ? PBUIShape.fromPartial(object.parent)
      : undefined;
    return message;
  },
};

function createBasePBUITextShape(): PBUITextShape {
  return {
    name: "",
    visible: false,
    opacity: 0,
    hAlign: "",
    vAlign: "",
    width: "",
    height: "",
    positionX: "",
    positionY: "",
    isPointerBlocker: false,
    parent: undefined,
    outlineWidth: 0,
    outlineColor: undefined,
    color: undefined,
    fontSize: 0,
    fontAutoSize: false,
    fontWeight: "",
    value: "",
    lineSpacing: 0,
    lineCount: 0,
    adaptWidth: false,
    adaptHeight: false,
    textWrapping: false,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: undefined,
    hTextAlign: "",
    vTextAlign: "",
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  };
}

export const PBUITextShape = {
  encode(message: PBUITextShape, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    if (message.opacity !== 0) {
      writer.uint32(29).float(message.opacity);
    }
    if (message.hAlign !== "") {
      writer.uint32(34).string(message.hAlign);
    }
    if (message.vAlign !== "") {
      writer.uint32(42).string(message.vAlign);
    }
    if (message.width !== "") {
      writer.uint32(50).string(message.width);
    }
    if (message.height !== "") {
      writer.uint32(58).string(message.height);
    }
    if (message.positionX !== "") {
      writer.uint32(66).string(message.positionX);
    }
    if (message.positionY !== "") {
      writer.uint32(74).string(message.positionY);
    }
    if (message.isPointerBlocker === true) {
      writer.uint32(80).bool(message.isPointerBlocker);
    }
    if (message.parent !== undefined) {
      PBUIShape.encode(message.parent, writer.uint32(90).fork()).ldelim();
    }
    if (message.outlineWidth !== 0) {
      writer.uint32(101).float(message.outlineWidth);
    }
    if (message.outlineColor !== undefined) {
      PBColor4.encode(message.outlineColor, writer.uint32(106).fork()).ldelim();
    }
    if (message.color !== undefined) {
      PBColor4.encode(message.color, writer.uint32(114).fork()).ldelim();
    }
    if (message.fontSize !== 0) {
      writer.uint32(125).float(message.fontSize);
    }
    if (message.fontAutoSize === true) {
      writer.uint32(128).bool(message.fontAutoSize);
    }
    if (message.fontWeight !== "") {
      writer.uint32(138).string(message.fontWeight);
    }
    if (message.value !== "") {
      writer.uint32(146).string(message.value);
    }
    if (message.lineSpacing !== 0) {
      writer.uint32(157).float(message.lineSpacing);
    }
    if (message.lineCount !== 0) {
      writer.uint32(165).float(message.lineCount);
    }
    if (message.adaptWidth === true) {
      writer.uint32(168).bool(message.adaptWidth);
    }
    if (message.adaptHeight === true) {
      writer.uint32(176).bool(message.adaptHeight);
    }
    if (message.textWrapping === true) {
      writer.uint32(184).bool(message.textWrapping);
    }
    if (message.shadowBlur !== 0) {
      writer.uint32(197).float(message.shadowBlur);
    }
    if (message.shadowOffsetX !== 0) {
      writer.uint32(205).float(message.shadowOffsetX);
    }
    if (message.shadowOffsetY !== 0) {
      writer.uint32(213).float(message.shadowOffsetY);
    }
    if (message.shadowColor !== undefined) {
      PBColor4.encode(message.shadowColor, writer.uint32(218).fork()).ldelim();
    }
    if (message.hTextAlign !== "") {
      writer.uint32(226).string(message.hTextAlign);
    }
    if (message.vTextAlign !== "") {
      writer.uint32(234).string(message.vTextAlign);
    }
    if (message.paddingTop !== 0) {
      writer.uint32(245).float(message.paddingTop);
    }
    if (message.paddingRight !== 0) {
      writer.uint32(253).float(message.paddingRight);
    }
    if (message.paddingBottom !== 0) {
      writer.uint32(261).float(message.paddingBottom);
    }
    if (message.paddingLeft !== 0) {
      writer.uint32(269).float(message.paddingLeft);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBUITextShape {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBUITextShape();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        case 3:
          message.opacity = reader.float();
          break;
        case 4:
          message.hAlign = reader.string();
          break;
        case 5:
          message.vAlign = reader.string();
          break;
        case 6:
          message.width = reader.string();
          break;
        case 7:
          message.height = reader.string();
          break;
        case 8:
          message.positionX = reader.string();
          break;
        case 9:
          message.positionY = reader.string();
          break;
        case 10:
          message.isPointerBlocker = reader.bool();
          break;
        case 11:
          message.parent = PBUIShape.decode(reader, reader.uint32());
          break;
        case 12:
          message.outlineWidth = reader.float();
          break;
        case 13:
          message.outlineColor = PBColor4.decode(reader, reader.uint32());
          break;
        case 14:
          message.color = PBColor4.decode(reader, reader.uint32());
          break;
        case 15:
          message.fontSize = reader.float();
          break;
        case 16:
          message.fontAutoSize = reader.bool();
          break;
        case 17:
          message.fontWeight = reader.string();
          break;
        case 18:
          message.value = reader.string();
          break;
        case 19:
          message.lineSpacing = reader.float();
          break;
        case 20:
          message.lineCount = reader.float();
          break;
        case 21:
          message.adaptWidth = reader.bool();
          break;
        case 22:
          message.adaptHeight = reader.bool();
          break;
        case 23:
          message.textWrapping = reader.bool();
          break;
        case 24:
          message.shadowBlur = reader.float();
          break;
        case 25:
          message.shadowOffsetX = reader.float();
          break;
        case 26:
          message.shadowOffsetY = reader.float();
          break;
        case 27:
          message.shadowColor = PBColor4.decode(reader, reader.uint32());
          break;
        case 28:
          message.hTextAlign = reader.string();
          break;
        case 29:
          message.vTextAlign = reader.string();
          break;
        case 30:
          message.paddingTop = reader.float();
          break;
        case 31:
          message.paddingRight = reader.float();
          break;
        case 32:
          message.paddingBottom = reader.float();
          break;
        case 33:
          message.paddingLeft = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBUITextShape {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      opacity: isSet(object.opacity) ? Number(object.opacity) : 0,
      hAlign: isSet(object.hAlign) ? String(object.hAlign) : "",
      vAlign: isSet(object.vAlign) ? String(object.vAlign) : "",
      width: isSet(object.width) ? String(object.width) : "",
      height: isSet(object.height) ? String(object.height) : "",
      positionX: isSet(object.positionX) ? String(object.positionX) : "",
      positionY: isSet(object.positionY) ? String(object.positionY) : "",
      isPointerBlocker: isSet(object.isPointerBlocker) ? Boolean(object.isPointerBlocker) : false,
      parent: isSet(object.parent) ? PBUIShape.fromJSON(object.parent) : undefined,
      outlineWidth: isSet(object.outlineWidth) ? Number(object.outlineWidth) : 0,
      outlineColor: isSet(object.outlineColor) ? PBColor4.fromJSON(object.outlineColor) : undefined,
      color: isSet(object.color) ? PBColor4.fromJSON(object.color) : undefined,
      fontSize: isSet(object.fontSize) ? Number(object.fontSize) : 0,
      fontAutoSize: isSet(object.fontAutoSize) ? Boolean(object.fontAutoSize) : false,
      fontWeight: isSet(object.fontWeight) ? String(object.fontWeight) : "",
      value: isSet(object.value) ? String(object.value) : "",
      lineSpacing: isSet(object.lineSpacing) ? Number(object.lineSpacing) : 0,
      lineCount: isSet(object.lineCount) ? Number(object.lineCount) : 0,
      adaptWidth: isSet(object.adaptWidth) ? Boolean(object.adaptWidth) : false,
      adaptHeight: isSet(object.adaptHeight) ? Boolean(object.adaptHeight) : false,
      textWrapping: isSet(object.textWrapping) ? Boolean(object.textWrapping) : false,
      shadowBlur: isSet(object.shadowBlur) ? Number(object.shadowBlur) : 0,
      shadowOffsetX: isSet(object.shadowOffsetX) ? Number(object.shadowOffsetX) : 0,
      shadowOffsetY: isSet(object.shadowOffsetY) ? Number(object.shadowOffsetY) : 0,
      shadowColor: isSet(object.shadowColor) ? PBColor4.fromJSON(object.shadowColor) : undefined,
      hTextAlign: isSet(object.hTextAlign) ? String(object.hTextAlign) : "",
      vTextAlign: isSet(object.vTextAlign) ? String(object.vTextAlign) : "",
      paddingTop: isSet(object.paddingTop) ? Number(object.paddingTop) : 0,
      paddingRight: isSet(object.paddingRight) ? Number(object.paddingRight) : 0,
      paddingBottom: isSet(object.paddingBottom) ? Number(object.paddingBottom) : 0,
      paddingLeft: isSet(object.paddingLeft) ? Number(object.paddingLeft) : 0,
    };
  },

  toJSON(message: PBUITextShape): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.visible !== undefined && (obj.visible = message.visible);
    message.opacity !== undefined && (obj.opacity = message.opacity);
    message.hAlign !== undefined && (obj.hAlign = message.hAlign);
    message.vAlign !== undefined && (obj.vAlign = message.vAlign);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.positionX !== undefined && (obj.positionX = message.positionX);
    message.positionY !== undefined && (obj.positionY = message.positionY);
    message.isPointerBlocker !== undefined && (obj.isPointerBlocker = message.isPointerBlocker);
    message.parent !== undefined && (obj.parent = message.parent ? PBUIShape.toJSON(message.parent) : undefined);
    message.outlineWidth !== undefined && (obj.outlineWidth = message.outlineWidth);
    message.outlineColor !== undefined &&
      (obj.outlineColor = message.outlineColor ? PBColor4.toJSON(message.outlineColor) : undefined);
    message.color !== undefined && (obj.color = message.color ? PBColor4.toJSON(message.color) : undefined);
    message.fontSize !== undefined && (obj.fontSize = message.fontSize);
    message.fontAutoSize !== undefined && (obj.fontAutoSize = message.fontAutoSize);
    message.fontWeight !== undefined && (obj.fontWeight = message.fontWeight);
    message.value !== undefined && (obj.value = message.value);
    message.lineSpacing !== undefined && (obj.lineSpacing = message.lineSpacing);
    message.lineCount !== undefined && (obj.lineCount = message.lineCount);
    message.adaptWidth !== undefined && (obj.adaptWidth = message.adaptWidth);
    message.adaptHeight !== undefined && (obj.adaptHeight = message.adaptHeight);
    message.textWrapping !== undefined && (obj.textWrapping = message.textWrapping);
    message.shadowBlur !== undefined && (obj.shadowBlur = message.shadowBlur);
    message.shadowOffsetX !== undefined && (obj.shadowOffsetX = message.shadowOffsetX);
    message.shadowOffsetY !== undefined && (obj.shadowOffsetY = message.shadowOffsetY);
    message.shadowColor !== undefined &&
      (obj.shadowColor = message.shadowColor ? PBColor4.toJSON(message.shadowColor) : undefined);
    message.hTextAlign !== undefined && (obj.hTextAlign = message.hTextAlign);
    message.vTextAlign !== undefined && (obj.vTextAlign = message.vTextAlign);
    message.paddingTop !== undefined && (obj.paddingTop = message.paddingTop);
    message.paddingRight !== undefined && (obj.paddingRight = message.paddingRight);
    message.paddingBottom !== undefined && (obj.paddingBottom = message.paddingBottom);
    message.paddingLeft !== undefined && (obj.paddingLeft = message.paddingLeft);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBUITextShape>, I>>(object: I): PBUITextShape {
    const message = createBasePBUITextShape();
    message.name = object.name ?? "";
    message.visible = object.visible ?? false;
    message.opacity = object.opacity ?? 0;
    message.hAlign = object.hAlign ?? "";
    message.vAlign = object.vAlign ?? "";
    message.width = object.width ?? "";
    message.height = object.height ?? "";
    message.positionX = object.positionX ?? "";
    message.positionY = object.positionY ?? "";
    message.isPointerBlocker = object.isPointerBlocker ?? false;
    message.parent = (object.parent !== undefined && object.parent !== null)
      ? PBUIShape.fromPartial(object.parent)
      : undefined;
    message.outlineWidth = object.outlineWidth ?? 0;
    message.outlineColor = (object.outlineColor !== undefined && object.outlineColor !== null)
      ? PBColor4.fromPartial(object.outlineColor)
      : undefined;
    message.color = (object.color !== undefined && object.color !== null)
      ? PBColor4.fromPartial(object.color)
      : undefined;
    message.fontSize = object.fontSize ?? 0;
    message.fontAutoSize = object.fontAutoSize ?? false;
    message.fontWeight = object.fontWeight ?? "";
    message.value = object.value ?? "";
    message.lineSpacing = object.lineSpacing ?? 0;
    message.lineCount = object.lineCount ?? 0;
    message.adaptWidth = object.adaptWidth ?? false;
    message.adaptHeight = object.adaptHeight ?? false;
    message.textWrapping = object.textWrapping ?? false;
    message.shadowBlur = object.shadowBlur ?? 0;
    message.shadowOffsetX = object.shadowOffsetX ?? 0;
    message.shadowOffsetY = object.shadowOffsetY ?? 0;
    message.shadowColor = (object.shadowColor !== undefined && object.shadowColor !== null)
      ? PBColor4.fromPartial(object.shadowColor)
      : undefined;
    message.hTextAlign = object.hTextAlign ?? "";
    message.vTextAlign = object.vTextAlign ?? "";
    message.paddingTop = object.paddingTop ?? 0;
    message.paddingRight = object.paddingRight ?? 0;
    message.paddingBottom = object.paddingBottom ?? 0;
    message.paddingLeft = object.paddingLeft ?? 0;
    return message;
  },
};

function createBasePBOpenExternalUrl(): PBOpenExternalUrl {
  return { url: "" };
}

export const PBOpenExternalUrl = {
  encode(message: PBOpenExternalUrl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBOpenExternalUrl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBOpenExternalUrl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBOpenExternalUrl {
    return { url: isSet(object.url) ? String(object.url) : "" };
  },

  toJSON(message: PBOpenExternalUrl): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBOpenExternalUrl>, I>>(object: I): PBOpenExternalUrl {
    const message = createBasePBOpenExternalUrl();
    message.url = object.url ?? "";
    return message;
  },
};

function createBasePBOpenNFTDialog(): PBOpenNFTDialog {
  return { assetContractAddress: "", tokenId: "", comment: "" };
}

export const PBOpenNFTDialog = {
  encode(message: PBOpenNFTDialog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetContractAddress !== "") {
      writer.uint32(10).string(message.assetContractAddress);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.comment !== "") {
      writer.uint32(26).string(message.comment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PBOpenNFTDialog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePBOpenNFTDialog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetContractAddress = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.comment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PBOpenNFTDialog {
    return {
      assetContractAddress: isSet(object.assetContractAddress) ? String(object.assetContractAddress) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      comment: isSet(object.comment) ? String(object.comment) : "",
    };
  },

  toJSON(message: PBOpenNFTDialog): unknown {
    const obj: any = {};
    message.assetContractAddress !== undefined && (obj.assetContractAddress = message.assetContractAddress);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.comment !== undefined && (obj.comment = message.comment);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PBOpenNFTDialog>, I>>(object: I): PBOpenNFTDialog {
    const message = createBasePBOpenNFTDialog();
    message.assetContractAddress = object.assetContractAddress ?? "";
    message.tokenId = object.tokenId ?? "";
    message.comment = object.comment ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
