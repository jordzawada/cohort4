from openpyxl import Workbook

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

createWorkbook()