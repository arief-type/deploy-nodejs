import * as path from "path";
import moduleAlias from "module-alias";

moduleAlias.addAlias("@", path.join(__dirname, "..", "dist"));
