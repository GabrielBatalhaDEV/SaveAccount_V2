import { Router } from "express";
import { CreateCategoryController } from "../controllers/createCategoryController";
import { CreateTemplateController } from "../controllers/createTemplateController";
import { DeleteCategoryController } from "../controllers/deleteCategoryController";
import { GetAccountController } from "../controllers/getAccountController";
import { GetCategoryByIdController } from "../controllers/getCategoryByIdController";
import { GetCategoryController } from "../controllers/getCategoryController";
import { getTemplateByIdController } from "../controllers/getTemplateByIdController";
import { getTemplateController } from "../controllers/getTemplatesController";
import { UpdateCategoryNameController } from "../controllers/updateCategoryNameController";

const route = Router();

route.get("/template", getTemplateController);
route.get("/template/:id", getTemplateByIdController);

route.get("/category", GetCategoryController);
route.get("/category/:id", GetCategoryByIdController);

route.post("/account", GetAccountController);
route.post("/templates", CreateTemplateController);
route.post("/category", CreateCategoryController);

route.patch("/category/:id", UpdateCategoryNameController);

route.delete("/category/:id", DeleteCategoryController);

export { route };
