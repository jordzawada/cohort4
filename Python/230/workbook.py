from openpyxl import Workbook
from openpyxl import load_workbook

def createWorkbook():
    wb = Workbook()
    ws = wb.active
    ws.title= "customers"
    ws['A1'] = "id"
    ws['B1'] = "name"
    ws['A2'] = 1
    ws['B2'] = 'Al'

    ws = wb.create_sheet("invoices")
    ws['A1'] = "id"
    ws['B1'] = "customer id"
    ws['C1'] = "date"
    ws['A2'] =  1
    ws['A3'] = 2
    ws['B2'] = 1
    ws['B3'] = 1

    ws = wb.create_sheet("line items")
    ws['A1'] = "id"
    # ws['B1'] = "name" is this needed?
    ws['B1'] = "qty"
    ws['A2'] = 2
    ws['B2'] =50
    ws['A3'] = 1
    ws['B3'] = 25

    ws = wb.create_sheet("product")
    ws['A1'] = "id"
    ws['B1'] = "name"
    ws['A2'] = 1
    ws['B2'] = 'bolts'
    ws['A3'] = 2
    ws['B3'] = 'nuts'
    wb.save('billy.xlsx')

def createInvoice(invNum):
    # print('invoice')
    wb=load_workbook('billy.xlsx')
    for row in wb['invoices']['A']:
        if row.value == invNum:
            customerID = wb['invoices'].cell(row=row.row, column=row.column+1).value
    for row in wb['customers']['A']:
        if row.value == customerID:
            customerName = wb['customers'].cell(row=row.row, column=row.column+1).value
    lines= {}        
    for row in wb['line items']['A']: 
        x = row.value  
        for productID in wb['product']['A']:
            if x == productID.value:
                x = wb['product'].cell(row=productID.row,column=productID.column+1).value
        lines[x] = wb['line items'].cell(row=row.row, column=row.column+1).value
        # print(lines)  
    
    print(f'Invoice {invNum} for customer:{customerName}, has items:' )
    for x in lines:
        print(x, lines[x] )           

# createWorkbook()

