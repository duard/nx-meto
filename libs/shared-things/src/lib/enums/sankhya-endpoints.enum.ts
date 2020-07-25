export enum SankhyaEndpoint {
  AUTHENTICATION = `/mge/service.sbr?serviceName=MobileLoginSP.login&outputType=json`,
  CONSULT_IN_SANKHYA = `/mge/service.sbr?serviceName=DbExplorerSP.executeQuery&`,
  FINISH_SESSION = `/mge/service.sbr?serviceName=MobileLoginSP.logout&outputType=json`,
}
