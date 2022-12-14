export type ParcelControllerEvents = 'Sighted' | 'Lost sight'
export type SceneControllerEvents = 'Unload scene' | 'Start scene'
export type SettlementControllerEvents = 'Settled Position' | 'Unsettled Position'

export type LifeCycleControllerEvents = ParcelControllerEvents & SceneControllerEvents & SettlementControllerEvents
