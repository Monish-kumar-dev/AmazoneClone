global class LoginUserr{
    @AuraEnabled
    global static String login(String username,String password){
        String homeurl='https://monish3-dev-ed.develop.my.site.com/s/';
        ApexPages.PageReference pageRef=Site.login(username, password, homeurl);
        return pageRef.getUrl();
    }

}