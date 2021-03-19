import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as lambda_nodejs from '@aws-cdk/aws-lambda-nodejs';

export class NjsFunctionStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new lambda_nodejs.NodejsFunction(this, 'function', {
      runtime: lambda.Runtime.NODEJS_14_X,
    });

    new cdk.CfnOutput(this, 'Name', {
      value: fn.functionName,
    });
  }
}
