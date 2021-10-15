export interface DataCovid {
    objectIdFieldName: string;
    uniqueIdField:     UniqueIDField;
    globalIdFieldName: string;
    geometryType:      string;
    spatialReference:  SpatialReference;
    fields:            Field[];
    features:          Feature[];
}

export interface Feature {
    attributes: Attributes;
    geometry?:  Geometry;
}

export interface Attributes {
    Country_Region: string;
    Confirmed:      number;
    Deaths:         number;
    Incident_Rate:  number | null;
    Mortality_Rate: number;
}

export interface Geometry {
    x: number;
    y: number;
}

export interface Field {
    name:         string;
    type:         string;
    alias:        string;
    sqlType:      string;
    length?:      number;
    domain:       null;
    defaultValue: null;
}

export interface SpatialReference {
    wkid:       number;
    latestWkid: number;
}

export interface UniqueIDField {
    name:               string;
    isSystemMaintained: boolean;
}
