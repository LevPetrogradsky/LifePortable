// Each extracted service keeps the shared data model but opens its own workspace.
export const serviceMode: 'hub' | 'tasks' | 'journal' | 'time' = 'hub'
export const serviceName = { hub: 'LifePortable', tasks: 'LifeTasks', journal: 'LifeJournal', time: 'LifeTime' }[serviceMode]
const repositoryName = { hub: 'LifePortable', tasks: 'LiveTasks', journal: 'LiveJournal', time: 'LiveTime' }[serviceMode]
export const repositoryUrl = `https://github.com/LevPetrogradsky/${repositoryName}`
