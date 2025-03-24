// document.body.innerHTML = "zkouška"; kontrola pripojeni JS k HTML 

/* zadání
Vytvořte si repozitář ze šablony cviceni-cenik se stránkou, která nabízí předplatné za nějaké služby. Může jít například o internetovou televizi, pravidelné dovážky jídla nebo třeba webový hosting.

1.Přidejte do stránky soubor s JavaScriptem. //OK 
*/


/*
2.Napište funkci selectPlan s jedním parametrem planNumber. Tento parametr bude představovat číslo plánu. Funkce podle čísla plánu vybere ze stránky správný DOM element a přidá k němu CSS třídu plan--selected.

3.Vyzkoušejte vaši funkci použít ve stránce pro výběr plánu.

4.Opakovaným voláním funkce selectPlan lze na stránce postupně vybrat všechny plány. My bychom však chtěli, aby mohl být vybrán vždy nejvýš jeden. Upravte funkci selectPlan tak, že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z příslušného prvku odebrat třídu plan--selected.
5.Opět vyzkoušejte funkci ve stránce. Neuvidíte výběr jednotlivých plánů (JavaScript je vybere velmi rychle), ale na stránce by měl zůstat poslední vybraný plán. 
*/

function selectPlan(planNumber) {
    const plans = document.querySelectorAll (".plan"); 
    
    plans.forEach(plan => plan.classList.remove('plan--selected'));

    if (planNumber >=1 && planNumber <= plans.length){
        document.getElementById(`plan${planNumber}`).classList.add("plan--selected");    
    }
}

document.querySelectorAll('.plan').forEach((plan, index) => {
    plan.addEventListener('click', () => selectPlan(index + 1)); // `index + 1` odpovídá ID plánu
});
