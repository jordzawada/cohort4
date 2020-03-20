import functions from './fetch.js';

test('test the basics', () => {

const data =
    [{"name":"Nicoleta","surname":"Cimpoeșu","gender":"female","region":"Romania"},{"name":"Karolina","surname":"Szulc","gender":"female","region":"Poland"},{"name":"Claudia","surname":"Ríos","gender":"female","region":"Mexico"},{"name":"Qönçə","surname":"Əkbərli","gender":"female","region":"Azerbaijan"},{"name":"Tudor","surname":"Bîrlea","gender":"male","region":"Romania"},{"name":"Rania","surname":"Vermeersch","gender":"female","region":"Belgium"},{"name":"Виктория","surname":"Владимировa","gender":"female","region":"Russia"},{"name":"Alice","surname":"Greceanu","gender":"female","region":"Romania"},{"name":"Rachana","surname":"Jha","gender":"female","region":"Nepal"},{"name":"Horațiu","surname":"Urs","gender":"male","region":"Romania"}]
    expect(functions.getFirstName(data)).toBe("Nicoleta");
    expect(functions.getAllFirstNames(data).length).not.toBe(0);

});


