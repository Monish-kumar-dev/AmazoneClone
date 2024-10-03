public class LeaveSettingsUtil {
    public static Boolean shouldBypassLeaveUpdate() {
        LeaveSettings__c settings = LeaveSettings__c.getOrgDefaults();
        return settings != null && settings.Bypass_Leave_Update__c;
    }
}