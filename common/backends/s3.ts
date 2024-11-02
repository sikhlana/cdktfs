import { S3Backend, S3BackendConfig, TerraformStack } from 'cdktf';
import defu from 'defu';
import { kebabCase } from 'scule';

export function s3BackendFactory(
  config: Partial<S3BackendConfig> = {},
): (stack: TerraformStack) => void {
  return (stack) => {
    new S3Backend(
      stack,
      defu(config, {
        accessKey: process.env.BACKEND_S3_ACCESS_KEY,
        bucket: process.env.BACKEND_S3_BUCKET,
        key: `${kebabCase(stack.node.id)}.tfstate`,
        region: process.env.BACKEND_S3_REGION,
        secretKey: process.env.BACKEND_S3_SECRET_KEY,
      } as S3BackendConfig) as S3BackendConfig,
    );
  };
}

s3BackendFactory();
