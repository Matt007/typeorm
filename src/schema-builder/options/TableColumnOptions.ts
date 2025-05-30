/**
 * Table's column options.
 */
export interface TableColumnOptions {
    // -------------------------------------------------------------------------
    // Public Properties
    // -------------------------------------------------------------------------

    /**
     * Column name.
     */
    name: string

    /**
     * Column type.
     */
    type: string

    /**
     * Column's default value.
     */
    default?: any

    /**
     * ON UPDATE trigger. Works only for MySQL.
     */
    onUpdate?: string

    /**
     * Indicates if column is NULL, or is NOT NULL in the database.
     */
    isNullable?: boolean

    /**
     * Indicates if column is auto-generated sequence.
     */
    isGenerated?: boolean

    /**
     * Specifies generation strategy if this column will use auto increment.
     */
    generationStrategy?: "uuid" | "increment" | "rowid" | "identity"

    /**
     * Indicates if column is a primary key.
     */
    isPrimary?: boolean

    /**
     * Indicates if column has unique value.
     */
    isUnique?: boolean

    /**
     * Indicates if column stores array.
     */
    isArray?: boolean

    /**
     * Column's comment.
     */
    comment?: string

    /**
     * Column type's length. Used only on some column types.
     * For example type = "string" and length = "100" means that ORM will create a column with type varchar(100).
     */
    length?: string

    /**
     * Column type's display width. Used only on some column types in MySQL.
     * For example, INT(4) specifies an INT with a display width of four digits.
     */
    width?: number

    /**
     * Vector dimensions. Used only for vector type.
     * For example type = "vector" and dimensions = 3 means that we will create a column with type vector(3).
     */
    dimensions?: number

    /**
     * Defines column character set.
     */
    charset?: string

    /**
     * Defines column collation.
     */
    collation?: string

    /**
     * The precision for a decimal (exact numeric) column (applies only for decimal column), which is the maximum
     * number of digits that are stored for the values.
     */
    precision?: number | null

    /**
     * The scale for a decimal (exact numeric) column (applies only for decimal column), which represents the number
     * of digits to the right of the decimal point and must not be greater than precision.
     */
    scale?: number

    /**
     * Puts ZEROFILL attribute on to numeric column. Works only for MySQL.
     * If you specify ZEROFILL for a numeric column, MySQL automatically adds the UNSIGNED attribute to the column
     */
    zerofill?: boolean

    /**
     * Puts UNSIGNED attribute on to numeric column. Works only for MySQL.
     */
    unsigned?: boolean

    /**
     * Array of possible enumerated values.
     */
    enum?: string[]

    /**
     * Exact name of enum
     */
    enumName?: string

    /**
     * If this column is primary key then this specifies the name for it.
     */
    primaryKeyConstraintName?: string

    /**
     * If this column is foreign key then this specifies the name for it.
     */
    foreignKeyConstraintName?: string

    /**
     * Generated column expression.
     */
    asExpression?: string

    /**
     * Generated column type.
     */
    generatedType?: "VIRTUAL" | "STORED"

    /**
     * Identity column type. Supports only in Postgres 10+.
     */
    generatedIdentity?: "ALWAYS" | "BY DEFAULT"

    /**
     * Spatial Feature Type (Geometry, Point, Polygon, etc.)
     */
    spatialFeatureType?: string

    /**
     * SRID (Spatial Reference ID (EPSG code))
     */
    srid?: number
}
