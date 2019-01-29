import React from 'react'

interface IColumn {
    id: string
    name: string
    flex?: string
    minWidth?: number
    maxWidth?: number
}

interface IProps {
    data: any[]
    columns: IColumn[]
    maxHeight?: string
}

const countMaxTableWidth = (columns: IColumn[]) => {
    let width = 0
    for(const column of columns) {
        if (!column.maxWidth) return 'auto'
        width = width + column.maxWidth
    }
    return width
}

const DuckTable = (props: IProps) => {
    const {columns, data} = props
    const maxWidth = countMaxTableWidth(columns)
    const minWidth = columns.reduce((acc, column) => acc + (column.minWidth || 0), 0)
    return (
    <div className="duck-table-container" style={{maxHeight: props.maxHeight, maxWidth}}>
        <div className="duck-table" style={{minWidth}}>
            <div className="duck-table-header">
                <div className="duck-table-row">
                    {columns.map(column =>
                        <div className="duck-table-cell" key={column.id} style={{
                            minWidth: `${column.minWidth}px`,
                            maxWidth: `${column.maxWidth}px`
                        }}>{column.name}</div>
                    )}
                </div>
            </div>
            <div className="duck-table-body">
                {data.map(item =>
                    <div className="duck-table-row" key={item.id}>
                        {columns.map(column =>
                            <div className="duck-table-cell" key={column.id} style={{
                                minWidth: `${column.minWidth}px`,
                                maxWidth: `${column.maxWidth}px`
                            }}>{item[column.id]}</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    </div>
)}

export default DuckTable
