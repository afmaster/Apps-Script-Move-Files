function MoviFiles() {
  
  const parentFolder = DriveApp.getFolderById("1B3LhVe7Mx1E04yFk-YYYG_KXoyCDIeFl");
  const destinationVivo = DriveApp.getFolderById("1IQ9n6COz_yq7srbRqSOVGtc26pdj1O7V");
  const destinationShell = DriveApp.getFolderById("1ooH9GmMTfRhqOz0fKaaJhNvMqk0-VJsF");
  const destinationUber = DriveApp.getFolderById("1ZLeSJMQBDzLDup8yG2ib-wDR-kiarBOx");
  const destinationCeee = DriveApp.getFolderById("1kQL2D3GP_SOfxuyH_bngHE9RGyXdleTP");
  const destinationGas = DriveApp.getFolderById("1GxXq8Ht8HyodJPsCVnJQauGGY05aa2Hk");
  const destinationEscola = DriveApp.getFolderById("1xonR-XIkTrfDrAY863v_fXeZXmCG51m5");
  const destinationOperados = DriveApp.getFolderById("1kEjSGZOyemkuMkztfUja9Vc_tNoBq9kY");

  let files = parentFolder.getFiles();
    while (files.hasNext()) {
      let file = files.next();
      let fileStr = file.toString();
      Logger.log(fileStr);
      if (fileStr.split(".").includes("bl")){
        destinationVivo.addFile(file);
        Logger.log(file);
        parentFolder.removeFile(file);
      }
      else if (fileStr.split(" ").includes("cx.txt")) {
        destinationOperados.addFile(file);
        Logger.log(file);
        parentFolder.removeFile(file);
      }
      else if (fileStr.split(".").includes("txt")) {
        Logger.log(file);
        parentFolder.removeFile(file);
      }
      else if (fileStr.split(" ").includes("Supergasbras")) {
        Logger.log(file);
        parentFolder.removeFile(file);
      }
      else if (fileStr.split("_").includes("Boleto")) {
        destinationVivo.addFile(file);
        Logger.log(file);
        parentFolder.removeFile(file);
      }
      else if (fileStr.split(" ").includes("compra")) {
        destinationShell.addFile(file);
        Logger.log(file);
        parentFolder.removeFile(file);
      }
      else if (fileStr.split(" ").includes("Uber")) {
        destinationUber.addFile(file);
        Logger.log(file);
        parentFolder.removeFile(file);
      }
      else if (fileStr.split(" ").includes("e-mail")) {
        Logger.log(file);
        parentFolder.removeFile(file);
      }
      else if (fileStr.split("-").includes("01")) {
        destinationCeee.addFile(file);
        Logger.log(file);
        parentFolder.removeFile(file);
      }
      else if (fileStr.split("_").includes("000002639144")) {
        destinationGas.addFile(file);
        Logger.log(file);
        parentFolder.removeFile(file);
      }
      else if (fileStr.split(" ").includes("Escola")) {
        destinationEscola.addFile(file);
        Logger.log(file);
        parentFolder.removeFile(file);
      }
    }
}
