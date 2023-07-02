import Joi, { ObjectSchema } from 'joi';
import { isObjectEmpty } from '../../common/utils/object.utils';
import { capitalize } from '../../common/utils/string.utils';

const validator = (schema: ObjectSchema, payload: object) => {
  const errors: object = [];
  const { error, value } = schema.validate(payload, { abortEarly: false });

  error?.details.map((detail) => {
    const key = detail.context?.key as keyof typeof errors;
    let messages = errors[key] as Array<string>;

    while (detail.message.includes('"'))
      detail.message = detail.message.replace('"', '');

    if (messages) messages.push(capitalize(detail.message));
    else messages = [detail.message];

    (errors as Array<typeof messages>)[key] = messages;
  });

  if (!isObjectEmpty(errors)) throw errors;

  return value;
};

const budgetModel = Joi.object({
  name: Joi.string().min(6).required(),
  amount: Joi.number().min(100).required(),
  amountSpent: Joi.number().default(0),
  amountLeft: Joi.number(),
  amountCanSpentByDay: Joi.number(),
});

const validateBudget = (payload: object) => validator(budgetModel, payload);

export { validateBudget };
