import { pages } from './../hellpers';



test('expect to return range of pages,  with center at number 7 and range 3 for range of pages at 30', () => {
    expect(pages(7, 3, 30)).toStrictEqual([4, 5, 6, 7, 8, 9, 10])
})




test('expect to return range of pages,  with center at number 3 and range 3 for range of pages at 30', () => {
    expect(pages(3, 3, 30)).toStrictEqual([1, 2, 3, 4, 5, 6])
})


test('expect to return range of pages,  with center at number 1 and range 3 for range of pages at 30', () => {
    expect(pages(1, 3, 30)).toStrictEqual([1, 2, 3, 4])
})

test('expect to return range of pages,  with center at number 28 and range 4 for range of pages at 30', () => {
    expect(pages(28, 4, 30)).toStrictEqual([24, 25, 26, 27, 28, 29, 30])
})