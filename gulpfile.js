let gulp = require("gulp"),
    exec = require("child_process").exec;

gulp.task("build-prod", function(cb) {
    exec("ng build --prod", function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task("git-init-commit", ["build-prod"], function(cb) {
    exec(
        'cd dist && git init && echo "necraidan.com" >> CNAME && git add --all && git commit -m "Deploy"',
        function(err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb(err);
        }
    );
});

gulp.task("git-push-deploy", ["git-init-commit"], function(cb) {
    exec(
        "cd dist && git remote add remoteDeploy git@github.com:necraidan/necraidan.github.io.git && git push -f remoteDeploy master",
        function(err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb(err);
        }
    );
});

gulp.task("band", ["build-prod", "git-init-commit", "git-push-deploy"]);
