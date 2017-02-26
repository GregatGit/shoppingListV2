// let savedItems =[
//     {"name": "cheese", "category": "fresh", "store": "Aldi", "weekly": false },
//     {"name": "apples", "category": "produce", "store": "Fruit_Market", "weekly": false},
//     {"name": "oranges", "category": "produce", "store": "Fruit_Market", "weekly": false},
//     {"name": "tomatoes", "category": "produce", "store": "Fruit_Market", "weekly": true},
//     {"name": "milk", "category": "fresh", "store": "Aldi", "weekly": true},
//     {"name": "chicken_legs", "category": "fresh", "store": "Aldi", "weekly": false},
//     {"name": "rye_bread", "category": "fresh", "store": "Coles", "weekly": false},
//     {"name": "dish_soap", "category": "cleaning", "store": "Aldi", "weekly": false},
//     {"name": "tissues", "category": "health", "store": "Aldi", "weekly": false},
//     {"name": "face wash", "category": "health", "store": "Aldi", "weekly": false},
//     {"name": "coffee", "category": "beverages", "store": "Coles", "weekly": false},
//     {"name": "tea", "category": "beverages", "store": "Aldi", "weekly": false},
//     {"name": "soft_drink", "category": "beverages", "store": "Aldi", "weekly": false}
// ];
let categories = [ 'fruit', 'vegetables', 'baking', 'meat', 'pasta&rice', 'frozen', 'dairy', 'cereals', 'cleaning', 'personal', 'canned', 'sauces', 'snacks', 'junkfood', 'spreads'];

let list1 = [
    ['apples', 'produce','Fruit_Market', true],
    ['oranges', 'produce', 'Fruit_Market', true],
    ['tomatoes', 'produce', 'Fruit_Market'],
    ['milk', 'fresh', 'Coles', true],
    ['cheese', 'fresh', 'Aldi'],
    ['chicken_legs', 'fresh', 'Aldi'],
    ['rye_bread', 'fresh', 'Coles'],
    ['dish_soap', 'fresh', 'Aldi'],
    ['tissues', 'fresh', 'Aldi'],
    ['face_wash', 'fresh', 'Aldi'],
    ['coffee', 'fresh', 'Coles'],
    ['tea', 'fresh', 'Aldi'],
    ['soft_drink', 'fresh', 'Coles']
];

let list2 = [
    ['flour', 'baking', 'Aldi'],
    ['rice', 'pasta&rice', 'Aldi'],
    ['surgar', 'baking', 'Aldi'],
    ['oats', 'cereals', 'Aldi'],
    ['semolina', 'cereals', 'Coles'],
    ['fish fingers', 'frozen', 'Aldi'],
    ['shampoo', 'personal', 'Aldi'],
    ['conditioner', 'personal', 'Aldi'],
    ['bread crumbs', 'baking', 'Aldi'],
    ['cake mix', 'baking', 'Aldi'],
    ['coccoa', 'baking', 'Aldi' ]
];
let lists = [{name: 'My List', list: list1}, {name: 'List 2', list: list2}];

function buildList(arr, list){
  arr.forEach(function(item){
  let name = item[0];
  let category = item[1];
  let store = item[2];
  let weekly = item[3] || false;
  list.push({name: name, category: category, store: store, weekly: weekly});
  });
}

let myNewList = [];

//buildList(catalogue1, myNewList);
//{name: name.value, category: category, store: store, weekly: true}

