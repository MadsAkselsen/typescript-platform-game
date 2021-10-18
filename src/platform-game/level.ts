import { vehicle } from "faker";

class Level {
    height: number;
    width: number;
    startActors: any;
    rows: string[];
    constructor(plan: string) {
        let rows = plan.trim().split("\n").map((l: any) => [...l]);
        this.height = rows.length;
        this.width = rows[0].length;
        this.startActors = [];

        this.rows = rows.map((row: any, y: any) => {
            return row.map((ch: any, x: any) => {
                let type = levelChars[ch];
                if (typeof type == "string") return type;
                this.startActors.push(type.create(new Vec(x, y), ch));
                return "empty";
            })
        })
    }
}