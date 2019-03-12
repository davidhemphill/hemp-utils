import minimum from '../src/minimum'

test('it returns the first promise result after the delay', async () => {
  const waiting = minimum(Promise.resolve('wew'))
  await expect(waiting).toBeInstanceOf(Promise)
  await expect(waiting).resolves.toBe('wew')
})