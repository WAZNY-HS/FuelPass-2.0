import assert from 'node:assert/strict';
import {initialState,vehicles,remaining,validate,dispense,isDemoState} from '../lib/demo.ts';
const s=initialState();assert.equal(remaining(s,vehicles[0]),18);assert.equal(remaining(s,vehicles[1]),5);
for(const value of ['0','-1','NaN','Infinity','1.001','','1e2','abc'])assert.equal(validate(s,'DEMO-PASS-001',value),'invalidLitres');
assert.equal(validate(s,'WRONG','5'),'unknown');assert.equal(validate(s,'DEMO-PASS-001','18.01'),'insufficient');assert.equal(validate(s,'DEMO-PASS-001','5',false),'offline');
const a=dispense(s,'DEMO-PASS-001','5','TX-003');assert.equal(a.error,null);assert.equal(remaining(a.state,vehicles[0]),13);assert.equal(a.state.transactions.length,3);
const b=dispense(a.state,'DEMO-PASS-001','5','TX-003');assert.equal(b.error,'duplicate');assert.deepEqual(b.state,a.state);
const c=dispense(a.state,'DEMO-PASS-001','13','TX-004');assert.equal(remaining(c.state,vehicles[0]),0);assert.ok(isDemoState(c.state));assert.equal(isDemoState({version:1,transactions:[...s.transactions,...s.transactions]}),false);assert.equal(remaining(s,vehicles[0]),18);
console.log('PASS: seed balances; 8 invalid inputs; unknown pass; excess allowance; offline; 5L commit; idempotency; exact remaining amount; persistence validation; immutable input.');
