import { Router } from "express";
import { AuthenticateUserController } from "../controllers/authenticateUserController";
import { CreateCardController } from "../controllers/createCardController";
import { CreateCategoryController } from "../controllers/createCategoryController";
import { CreateTemplateController } from "../controllers/createTemplateController";
import { DeleteCardController } from "../controllers/deleteCardController";
import { DeleteCategoryController } from "../controllers/deleteCategoryController";
import { GetAccountController } from "../controllers/getAccountController";
import { GetCardByIdController } from "../controllers/getCardByIdController";
import { GetCardController } from "../controllers/getCardController";
import { GetCategoryByIdController } from "../controllers/getCategoryByIdController";
import { GetCategoryController } from "../controllers/getCategoryController";
import { getTemplateByIdController } from "../controllers/getTemplateByIdController";
import { getTemplateController } from "../controllers/getTemplatesController";
import { UpdateCardController } from "../controllers/updateCardController";
import { UpdateCategoryNameController } from "../controllers/updateCategoryNameController";
import { ensureAuth } from "../middlewares/ensureAuth";

const route = Router();
//GET
route.get("/template", getTemplateController);
route.get("/template/:id", getTemplateByIdController);

route.get("/category", GetCategoryController);
route.get("/category/:id", GetCategoryByIdController);

route.get("/account", ensureAuth, GetAccountController);

route.get("/card", ensureAuth, GetCardController);
route.get("/card/:id", ensureAuth, GetCardByIdController);

//POST
route.post("/templates", CreateTemplateController);

route.post("/category", CreateCategoryController);

route.post("/login", AuthenticateUserController);

route.post("/card", ensureAuth, CreateCardController);

//UPDATE
route.patch("/category/:id", UpdateCategoryNameController);

route.put("/card/:id", ensureAuth, UpdateCardController);

//DELETE
route.delete("/category/:id", DeleteCategoryController);
route.delete("/card/:id", ensureAuth, DeleteCardController);

export { route };
