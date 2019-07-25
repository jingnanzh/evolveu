def taxCal(income):
    if income < 47630:
        tax = income*0.15
    elif 95259 >income >= 47630:
        tax = 47630 * 0.15 + ((income - 47630) * 0.205)
    elif 147667 >income >= 95259:
        tax = 47630 * 0.15 + 47629 * 0.205 + ((income - 95259) * 0.26)
    elif 210371 > income  >=147667:
        tax = 47630 * 0.15 + 47629 * 0.205 + 52408 * 0.26 + ((income - 147667) * 0.29);
    elif income > 210371:
        tax = 47630 * 0.15 + 47629 * 0.205 + 52408 * 0.26 + 62704 * 0.29 + ((income - 210371) * 0.33)
    return tax
