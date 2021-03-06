#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { NjsFunctionStack } from '../lib/njs-function-stack';

const app = new cdk.App();
new NjsFunctionStack(app, 'NjsFunctionStack');
