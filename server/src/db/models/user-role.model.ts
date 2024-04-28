import { Model, BelongsTo, Column, ForeignKey, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./user.model";
import { Role } from "./role.model";

@Table({ tableName: "user_role", underscored: true })
class UserRole extends Model {
    @BelongsTo(() => User)
    user!: User;

    @ForeignKey(() => User)
    @Column
    @PrimaryKey
    userId!: number;

    @BelongsTo(() => User)
    role!: Role;

    @ForeignKey(() => Role)
    @Column
    @PrimaryKey
    roleId!: number;
}

export { UserRole };