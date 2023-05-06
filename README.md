# Popis
Tato kalkulačka pomáhá podnikatelům se rozhodnout, jakou platební bránu nebo terminál zvolit. 
Ukazuje jim totiž, kolik cca za ni zaplatí při jejich objemu a počtu transakcí. Tyto faktory jsou totiž jiné pro každého podnikatele, takže nelze říct, že jedno řešení je nejlevnější pro všechny.

Odkaz na kalkulačku [najdete zde](https://www.zuzana-n.cz/kalkulacka-brany/).

# Stack
HTML, CSS a JavaScript (vanilla).

# Funkce
Umožňuje uživatelům zadat počet a objem měsíčních transakcí a poté údaje podle ceníků jednotlivých poskytovatelů brány/terminálu (podrobnost viz níže).
Pokud uživatelům nestačí 3 výchozí poskytovatelé, můžou si přidat další libovolný počet řádků. Dostanou tak přehled o nákladech pro všechny poskytovatele, které zvažují.
Výpočet probíhá ihned při zadání všech potřebných údajů, výsledek se ihned ukáže v políčku celkem.

## Jaké údaje mohou uživatelé zadat
- název poskytovatele - spíše pro lepší orientaci
- % poplatek z transakce
- Fixní poplatek z transakce
- Fixní měsíční poplatek
