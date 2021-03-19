import * as cdk from '@aws-cdk/core';
import * as lambda_nodejs from '@aws-cdk/aws-lambda-nodejs';

export class NjsFunctionStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda_nodejs.NodejsFunction(this, 'function');
  }
}
