def main(ctx):
    return [{
        "name": "hello",
        "steps": [
            {
                "name": "greeting",
                "image": "alpine",
                "commands": [
                    "echo Hello from CI",
                ],
                "when": {
                    "event": ["push", "pull_request"],
                    "branch": ["master"],
                },
            }
        ]
    }]
