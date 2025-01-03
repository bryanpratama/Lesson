import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum dengan dua angka positif', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('sum dengan angka negatif', () => {
  assert.strictEqual(sum(-2, 3), 0);
  assert.strictEqual(sum(2, -3), 0);
  assert.strictEqual(sum(-2, -3), 0);
});

test('sum dengan input non-angka', () => {
  assert.strictEqual(sum('2', 3), 0);
  assert.strictEqual(sum(2, '3'), 0);
  assert.strictEqual(sum('2', '3'), 0);
  assert.strictEqual(sum(undefined, 3), 0);
  assert.strictEqual(sum(2, null), 0);
});

test('sum dengan angka nol', () => {
  assert.strictEqual(sum(0, 3), 3);
  assert.strictEqual(sum(2, 0), 2);
  assert.strictEqual(sum(0, 0), 0);
});
