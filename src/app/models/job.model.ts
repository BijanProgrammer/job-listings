import {ContractEnum} from '../enums/contract.enum';
import {LocationEnum} from '../enums/location.enum';

export interface JobModel {
    id: string;
    company: string;
    logo: string;
    isNew: boolean;
    isFeatured: boolean;
    title: string;
    postedAt: string;
    contract: ContractEnum;
    location: LocationEnum;
    tags: string[];
}
