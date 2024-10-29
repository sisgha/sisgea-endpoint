import { ValidationFailedException } from "@/business-logic/standards";
import { Injectable, type PipeTransform } from "@nestjs/common";
import { omit } from "lodash";
import * as yup from "yup";
import { tryCast } from "../../../../../infrastructure/fixtures/validation/yup/tryCast";

interface ValidationPipeYupOptions {
  scope?: "body" | "param" | "query" | "arg" | "args";
  path?: string | null;
}

@Injectable()
export class ValidationPipeAjv implements PipeTransform {
  constructor(
    private jsonSchema: any,
    private options: ValidationPipeYupOptions = {},
  ) {}

  async transform(value: any /*, metadata: ArgumentMetadata */) {
    try {
      const schema = this.jsonSchema;

      const casted = tryCast(schema, value);
      const data = await schema.validate(casted);

      return data;
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        throw new ValidationFailedException([
          {
            scope: this.options.scope,
            ...omit(err, ["params", "value", "inner"]),
            path: [this.options.path, err.path].filter(Boolean).join("."),
          },
        ]);
      } else {
        throw new ValidationFailedException([
          {
            scope: this.options.scope,
            path: [this.options.path].filter(Boolean).join("."),
          },
        ]);
      }
    }
  }
}
