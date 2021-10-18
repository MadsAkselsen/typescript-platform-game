class State {
    level: any;
    actors: any;
    status: any;
    constructor(level: any, actors: any, status: any) {
        this.level = level;
        this.actors = actors;
        this.status = status;
    }

    static start(level: any) {
        return new State(level, level.startActors, "playing");
    }

    get player() {
        return this.actors.find((a: any) => a.type == "player");
    }
}