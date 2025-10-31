pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }

    stages {
        stage('Instalação das dependencias') {
            steps {
                echo 'Instalando os pacotes node...'
                sh 'npm install'
            }
        }
        
        stage('Rodar testes Cypress') {
            parallel {
                stage('Chrome') {
                    steps {
                        sh 'npx cypress run --browser chrome'
                    }
                }
        stage('Electron') {
            steps {
                sh 'npx cypress run --browser electron'
            }
        }
    }
}


    }

    post {
        success {
            echo 'Build e testes executados com sucesso'
        }
        failure {
            echo 'Falha na execução do pipeline'
        }
    }




}