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
                stage('Testes da suite 1') {
                    steps {
                        sh 'npm run teste-suite-1'
                    }
                }

                stage('Testes da suite 2') {
                    steps {
                        sh 'npm run teste-suite-2'
                    }
                }

                stage('Testes da suite 3') {
                    steps {
                        sh 'npm run teste-suite-3'
                    }
                }

            }
        }

    stage('Gerar relatório Mochawesome') {
        steps {
            dir('ci-cd-teste-jenkins') {
                sh 'report-1'
                sh 'report-2'
            archiveArtifacts artifacts: 'mochawesome-report/**/*.*', allowEmptyArchive: true
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
        always {
        archiveArtifacts artifacts: 'cypress/videos/**/*.*,cypress/screenshots/**/*.*', allowEmptyArchive: true
        
        publishHTML([ 
            allowMissing: false,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'ci-cd-teste-jenkins/mochawesome-report',
            reportFiles: 'mochawesome.html',
            reportName: 'Relatório de Testes Cypress'
        ])
    }
    }




}