const KiryanaStore = (function () {
    let itemCount = 0;
    const godown = []

    return {
        add(name) {
            itemCount++
            godown.push(name)
            return `Dukandar Ji stocked item: ${name}`
        },
        count() {
            return itemCount
        },
        list() {
            return godown.slice()
        }
    }
})()
/*
console.log(KiryanaStore.add('10 packs of Tea'))
console.log(KiryanaStore.add('10 KG Ginger'))
console.log("Count: ", KiryanaStore.count());
console.log("List: ", KiryanaStore.list());

console.log("TypeOf Direct godown ?: ", typeof KiryanaStore.godown);
console.log("TypeOf Direct godown ?: ", typeof KiryanaStore.itemCount);
console.log("Direct godown ?: ", KiryanaStore.itemCount);
console.log("Direct godown ?: ", KiryanaStore.godown);
*/


const AccountBook = (function () {
    const records = []
    const accessLog = []

    function logAccess(action) {
        accessLog.push(`[${new Date().toISOString().slice(0, 10)}] - ${action}`)
    }

    function store(doc) {
        logAccess(`Stored: ${doc}`)
        records.push(doc)
    }

    function retrieve(index) {
        logAccess(`Retrieved index ${index}`)
        return records[index] || "Not found"
    }

    function getRecordCount() {
        return records.length
    }

    function getAccessLog() {
        return accessLog.slice()
    }

    return {
        store,
        retrieve,
        count: getRecordCount,
        log: getAccessLog
    }
})()

/*
AccountBook.store("Sugar 2KG")
AccountBook.store("Rice 5KG")

console.log(`Durrani Gee retrieved ${AccountBook.retrieve(0)}`);
console.log(`Log Length ${AccountBook.log().length}`);
console.log(`Type of LogAccess:  ${AccountBook.logAccess}`);
*/



// Simulation:
const DurraniMart = {}
DurraniMart.Inventory = (function () {
    function unitPrice(totalPrice, quantity) {
        return totalPrice / quantity
    }

    function totalWeight(weightPerItem, quantity) {
        return weightPerItem * quantity
    }

    // simulation of export:
    // export {unitPrice, totalWeight}
    return { unitPrice, totalWeight }
})()


// Dependency Injection:
DurraniMart.BillingCalculator = (function (inventory) {
    function bulkDiscount(pricePerKgs, Kgs) {
        const totalWeight = inventory.totalWeight(pricePerKgs, Kgs)
        return `${(totalWeight * 0.95).toFixed(2)} after 5% bulk discount.`
    }

    return { bulkDiscount }
})(DurraniMart.Inventory)



console.log(DurraniMart.BillingCalculator.bulkDiscount(60, 10));

console.log(`Store Module: `, Object.keys(DurraniMart));
console.log(`Inventory APIs: `, Object.keys(DurraniMart.Inventory));