import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('Menjumlahkan dua angka positif', () => {
  const result = sum(2, 3);
  assert.strictEqual(result, 5, '2 + 3 seharusnya menghasilkan 5');
});

test('Menjumlahkan angka positif dan negatif', () => {
  const result = sum(5, -3);
  assert.strictEqual(result, 2, '5 + (-3) seharusnya menghasilkan 2');
});

test('Menjumlahkan dua angka negatif', () => {
  const result = sum(-4, -6);
  assert.strictEqual(result, -10, '-4 + (-6) seharusnya menghasilkan -10');
});

test('Menjumlahkan angka dengan nol', () => {
  const result = sum(7, 0);
  assert.strictEqual(result, 7, '7 + 0 seharusnya menghasilkan 7');
});
