const test = require('ava');

test('passes if environment variable is missing', (t) => {
  if (!process.env.REQUIRED_ENV_VARIABLE) {
    return t.pass('REQUIRED_ENV_VARIABLE is missing');
  }

  throw new Error(
    'if we got here, we would need REQUIRED_ENV_VARIABLE and fail'
  );
});

test.failing('fails if environment variable is missing', (t) => {
  if (!process.env.REQUIRED_ENV_VARIABLE) {
    return t.fail('REQUIRED_ENV_VARIABLE is missing');
  }

  t.pass(
    'If we got here the ".failing" modifier would not be satisfied since the test passed'
  );
});
