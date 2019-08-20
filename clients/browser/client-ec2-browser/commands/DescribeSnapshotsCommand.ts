import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSnapshots } from "../model/operations/DescribeSnapshots";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSnapshotsInput } from "../types/DescribeSnapshotsInput";
import { DescribeSnapshotsOutput } from "../types/DescribeSnapshotsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeSnapshotsInput";
export * from "../types/DescribeSnapshotsOutput";
export * from "../types/DescribeSnapshotsExceptionsUnion";

export class DescribeSnapshotsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSnapshotsInput,
      OutputTypesUnion,
      DescribeSnapshotsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeSnapshots;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSnapshotsInput,
    DescribeSnapshotsOutput,
    Blob
  >();

  constructor(readonly input: DescribeSnapshotsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeSnapshotsInput, DescribeSnapshotsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSnapshotsInput, DescribeSnapshotsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}