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

const DuckTable = (props: IProps) => {
    const {columns, data} = props
    const maxWidth = columns.reduce((acc, column) => acc + (column.maxWidth || 0), 0)
    const minWidth = columns.reduce((acc, column) => acc + (column.minWidth || 0), 0)
    return (
    <div className="duck-table-container" style={{maxHeight: props.maxHeight, maxWidth}}>
        <div className="duck-table" style={{minWidth}}>
            <div className="duck-table-header">
                <div className="duck-table-row">
                    {columns.map(column =>
                        <div className="duck-table-cell" key={column.id}>{column.name}</div>
                    )}
                </div>
            </div>
            <div className="duck-table-body">
                {data.map(item =>
                    <div className="duck-table-row" key={item.id}>
                        {columns.map(column =>
                            <div className="duck-table-cell" key={column.id}>{item[column.id]}</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    </div>
)}

export default DuckTable
