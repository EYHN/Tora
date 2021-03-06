import * as chaiM from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as sinonM from 'sinon';
import * as sinonChai from 'sinon-chai';

export const chai = chaiM;
chai.use(sinonChai);
chai.use(chaiAsPromised);

export const expect = chai.expect;
export const sinon = sinonM;
export const sandbox = sinon.sandbox.create();
