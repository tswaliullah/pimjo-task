
import { ActionService } from '../services/action.service.js';


const CreateAction = (req, res) => {
  const result = ActionService.CreateAction()

  return res.status(200).json(result);
};


export const ActionController = {
  CreateAction
};