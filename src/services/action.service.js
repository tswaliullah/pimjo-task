import rateLimit from "../middlewares/rateLimiting.js";


const CreateAction = () => {

  return {
    success: true,
    message: "Action processed successfully",
  };
};

export const ActionService = {
  CreateAction,
};
