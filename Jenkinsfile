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

        stage('Execução dos testes') {
            parallel {
                stage('Testes no chrome') {
                    steps {
                        sh 'npm run test-chrome'
                    }
                }

                stage('Testes no Electron') {
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