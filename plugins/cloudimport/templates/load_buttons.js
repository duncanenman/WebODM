PluginsAPI.Dashboard.addNewTaskButton(
	["cloudimport/build/ImportView.js"],
	function(args, ImportView) {
        return React.createElement(ImportView, {
                onNewTaskAdded: args.onNewTaskAdded,
                projectId: args.projectId,
                apiURL: "{{ api_url }}",
        });
	}
);

PluginsAPI.Dashboard.addTaskActionButton(
	["cloudimport/build/TaskView.js"],
	function(args, ImportView) {
		$.ajax({
			url: "{{ api_url }}/projects/" + args.task.project + "/tasks/" + args.task.id + "/checkforurl",
			dataType: 'json',
			async: false,
			success: function(data) {
				if (data.folder_url) {
					return React.createElement(ImportView, {
						folderUrl: data.folder_url,
					});
				}
			}
		});
	}
);