import { expect as expectCDK, haveResourceLike } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as NjsFunction from '../lib/njs-function-stack';

test('the stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new NjsFunction.NjsFunctionStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(haveResourceLike('AWS::Lambda::Function'));
});
