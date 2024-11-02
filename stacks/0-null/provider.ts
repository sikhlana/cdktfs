import { NullProvider } from '@cdktf/provider-null/lib/provider';
import { TerraformStack } from 'cdktf';

export const constructNullProvider = (stack: TerraformStack) =>
  new NullProvider(stack, 'null');
