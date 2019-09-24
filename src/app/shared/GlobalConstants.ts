import { Dictonary, IKeyedCollection } from "../shared/utilities";

export class GlobalConstants {

    public static dictAppSettingsMaster: IKeyedCollection<string> = new Dictonary<string>();
    public static isMobile:boolean=false;
    public static serviceUrl: string= "";
    public static profileData: any = [];

}