import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne, } from "typeorm"
import { v4 as uuid } from "uuid"
import { Tag } from "./Tag";
import { User } from "./User";
@Entity("compliments")
class Compliment {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;

    @JoinColumn({name: "user_sender"})
    @ManyToOne(() => User)
    user_Sender: User;

    @Column()
    user_receiver: string;

    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => User)
    user_Receiver: User;

    @Column()
    tag_id: string;

    @JoinColumn({ name: "tag_id", })
    @ManyToOne(() => Tag)
    tag: Tag;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
export { Compliment }