import sequelize from "../../config/db.config";
import { DocumentUser } from "./document-user.model";
import { Document } from "./document.model";
import { RefreshToken } from "./refresh-token.model";
import { Role } from "./role.model";
import { UserRole } from "./user-role.model";
import { User } from "./user.model";
import { Sequelize } from "sequelize";

sequelize.addModels([
    User,
    Role,
    RefreshToken,
    Document,
    DocumentUser,
    UserRole
])

const db = {
    Sequelize,
    sequelize,
    User,
    Role,
    RefreshToken,
    Document,
    DocumentUser,
    UserRole
}

export default db;

